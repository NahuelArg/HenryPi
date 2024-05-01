const axios = require("axios");
const URL = `https://api.thedogapi.com/v1/breeds`;
const{Dogs, Temperaments} = require('../db')

async function idRaza(req, res) {
  const {idRaza} = req.params;
  try {
    let dogId = await Dogs.findByPk((idRaza),{
      includes:Temperaments
    })
    if(!dogId){
      let response = await axios.get(`${URL}/${idRaza}`);
      dogId = response.data;
    }
    res.status(200).send(dogId);
  } catch (error) {
    console.log("error en archivo Id Raza", error.message);
        res.status(500).send({message:error.message});
  }
}
module.exports = idRaza;