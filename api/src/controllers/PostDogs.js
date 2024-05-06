const axios = require("axios");
const { Dogs, Temperaments } = require("../db");

async function postDogs(req, res) {
    const {image, name, height, weight, life_span, temperaments, id } = req.body;
    try {
        if (!image || !name || !height|| !weight || !life_span || !temperaments) {
            return res.status(402).send({ message: 'Faltan datos' });
        }
        if (image.length > 250) {
            return res.status(404).json({ message: "La URL de la imagen es muy larga" });
        }
        const findDog = await Dogs.findOne({ where: { name } });
        if (findDog) {
            return res.status(400).json({ message: 'El nombre del perro ya existe.' });
        }

        const createDog = await Dogs.create({
            id, image, name, height, weight, life_span, temperaments
        });

        const prueba = temperaments.join(',');
        const temperamentosArray = prueba.split(',').map(t => t.trim());

        await Promise.all(temperamentosArray.map(async (temp) => {
            try {
                const [temper, created] = await Temperaments.findOrCreate({
                    where: { name: temp },
                    defaults: { name: temp }
                });
                if (temper) {
                    await createDog.addTemperaments(temper); // Utiliza el objeto creado para asociar temperamentos
                }
            } catch (error) {
                console.error("Error al guardar el temperamento:", error);
                res.status(400).send({ message: "Error al guardar el temperamento" });
            }
        }));

        return res.status(201).json({ message: "Datos guardados correctamente" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = postDogs;
