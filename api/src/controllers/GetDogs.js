var axios = require('axios');
const URL = `https://api.thedogapi.com/v1/breeds`;

async function GetDogs(req, res){
  try {
    let response =  await axios.get(URL);
    let razasDePerros = response.data.map((raza) => {
        // Extraer los campos que necesitas de cada objeto de raza
        const { 
            id,
            name: nombre, 
            weight, 
            height, 
            life_span,
            temperament,
            reference_image_id,
        } = raza;
        
        const { imperial: pesoImperial } = weight;
        const { imperial: alturaImperial } = height;

        // Convertir el rango de peso e altura imperial a números
        const [pesoMin, pesoMax] = pesoImperial.split(' - ').map(parseFloat);
        const [alturaMin, alturaMax] = alturaImperial.split(' - ').map(parseFloat);

        return {
            id,
            nombre,
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
            imagen: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`
        };
    });
    res.status(200).json(razasDePerros);
} catch (error) {
    console.log('error en GetDogs.js', error.message);
    res.status(500).send({message:error.message});
}

}

module.exports = GetDogs;