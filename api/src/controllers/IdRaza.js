const axios = require("axios");
const URL = `https://api.thedogapi.com/v1/breeds`;
const { Dogs, Temperaments } = require('../db');

async function idRaza(req, res) {
  const { idRaza } = req.params;
  try {
    let dogId = await Dogs.findOne({ where: { id: idRaza }, include: Temperaments });

    if (!dogId) {
      let response = await axios.get(`${URL}/${idRaza}`);
      const { 
          id,
          name, 
          weight, 
          height, 
          life_span,
          temperament,
          reference_image_id,
          } = response.data;
      
      // Convertir el rango de peso e altura imperial a números
      const returnDog = {
          id,
          nombre: name,
          peso : height.imperial,
          altura: weight.imperial,
          anosDeVida: life_span,
          temperamento: temperament,
          imagen: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
        };
        console.log(returnDog);
      // Filtra los perros que coincidan exactamente con el nombre buscado
      return res.status(200).json(returnDog);
    }

  } catch (error) {
    console.log("Error en archivo Id Raza:", error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = idRaza;
