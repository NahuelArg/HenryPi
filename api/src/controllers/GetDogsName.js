const { Dogs } = require('../db');
const axios = require('axios');
const URL = `https://api.thedogapi.com/v1/breeds`;
const {Sequelize} = require('sequelize');

async function GetDogsName(req, res) {
    try {
        const {name} = req.query;
        console.log(name);
        const perroTolowerCase = name.toLowerCase();
        const dogByDB = await Dogs.findAll({
            // Cambio: Utilizo sequelize.fn y sequelize.col para formar la consulta
            where:{name:Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')),perroTolowerCase)}
        });
        // Si no se encontraron razas de perro en la base de datos local, buscar en la API externa
        if (dogByDB.length > 0) {
            return res.status(200).json(dogByDB);
        }
        // Si todavía no se encontraron razas de perro, devolver un mensaje de error
            const response = await axios.get(`${URL}`);
            // Cambio: Filtro los resultados de la API según el nombre proporcionado
           const dogByApi = response.data.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            if (dogByApi.length > 0) {
                return res.status(200).json(dogByApi);
            }            
        else{
            return res.status(404).send({ message: "Raza no encontrada" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error al buscar razas de perros" });
    }
}
module.exports = GetDogsName;