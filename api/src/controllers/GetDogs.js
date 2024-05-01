var axios = require('axios');
const URL = `https://api.thedogapi.com/v1/breeds`;
async function GetDogs(req, res){
    try {
    let response =  await axios.get(URL);
    let arrayDeRazas = response.data.map((breed) => {
        return breed;
    });
    res.status(200).json(arrayDeRazas);
    } catch (error) {
        console.log('error en GetDogs.js', error.message);
        res.status(500).send({message:error.message});
    }

}
module.exports = GetDogs;