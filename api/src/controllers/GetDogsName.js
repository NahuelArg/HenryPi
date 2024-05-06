const { Dogs, Temperaments } = require('../db');
const axios = require('axios');
const { Sequelize } = require('sequelize');
async function GetDogsName(req, res) {
    const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;
    const { name } = req.query;
    try {
        console.log("Nombre buscado:", name);
        // Busca en la base de datos local
        let dogByDB = await Dogs.findOne({
            where: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), name)
        });
     
        console.log("Perro encontrado en la base de datos local:", dogByDB);

        // Si encuentra un resultado en la base de datos local, lo devuelve
        if (dogByDB) {
            console.log("Perro encontrado en la base de datos local, devolviendo resultado...");
            return res.status(200).json([dogByDB]);
        } else {
            const { name: n2 } = req.query;
            console.log("No se encontró el perro en la base de datos local, buscando en la API externa...");
            console.log(req.query);
            // Si no encuentra resultados en la base de datos local, busca en la API externa
            const response = await axios.get(`${URL}${req.query.name}`);
            const dogByName = response.data.map(m => m)[0];
            // si dog by name es null manejar el error
            console.log(dogByName);
            const { 
                id,
                name, 
                weight, 
                height, 
                life_span,
                    temperament,
                    reference_image_id,
                } = dogByName;
                    console.log(weight);
            const { imperial: pesoImperial } = weight;
            const { imperial: alturaImperial } = height;
            
            // Convertir el rango de peso e altura imperial a números
            const [pesoMin, pesoMax] = pesoImperial.split(' - ').map(parseFloat);
            const [alturaMin, alturaMax] = alturaImperial.split(' - ').map(parseFloat);
            const returnDog = {
                id,
                nombre: name,
                peso: {
                    min: pesoMin,
                    max: pesoMax
                },
                altura: {
                    min: alturaMin,
                    max: alturaMax
                },
                anosDeVida: life_span,
                temperamento: temperament,
                imagen: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
              };

            // Filtra los perros que coincidan exactamente con el nombre buscado
            return res.status(200).json([returnDog]);
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error al buscar razas de perros" });
    }
}


module.exports = GetDogsName;
