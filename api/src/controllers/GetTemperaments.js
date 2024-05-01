var axios = require('axios');
const URL = `https://api.thedogapi.com/v1/breeds`;
const {Temperaments}= require('../db');
async function GetTemperaments(req, res){
    try {
    let response =  await axios.get(URL);
    let arrayDeRazas = [... new Set(response.data.filter(raza=>raza.temperament !== null || raza.temperament !== undefined).map(raza =>raza.temperament))]
    await Temperaments.bulkCreate(arrayDeRazas.map(name=>({name})));
    console.log(arrayDeRazas);
    res.status(200).json(arrayDeRazas);
    } catch (error) {
        console.log('error en GetTemperaments.js', error.message);
        res.status(500).send({message:error.message});
    }
}
module.exports = GetTemperaments;