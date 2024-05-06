const { Router } = require('express');
const getDogs = require('../controllers/GetDogs');
const idRaza=require('../controllers/IdRaza');
const getDogsName = require('../controllers/GetDogsName');
const postDogs = require('../controllers/PostDogs');
const getTemperaments = require('../controllers/GetTemperaments');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs);
router.get('/dogs/name?:name', getDogsName);
router.get('/dogs/:idRaza', idRaza);
router.get('/temperaments', getTemperaments);
router.post('/postDogs',postDogs);



module.exports = router;
