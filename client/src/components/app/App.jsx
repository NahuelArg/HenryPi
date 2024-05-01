import { useEffect, useState } from 'react';
import Cards from '../cards/Cards.jsx';
import Nav from "../NavBar/NavBar.jsx";
import axios from 'axios';
import {Route, Routes,useLocation, useNavigate} from 'react-router-dom';
import About from '../About/About.jsx';
import Detail from "../Detail/Detail.jsx"
import Form from "../Form/Form.jsx"
import LandingPage from '../Landing Page/LandingPage.jsx'
import HomePage from '../Home Page/HomePage.jsx';



function App() {
  const [characters, setCharacters] = useState([]);//ESTADO CHARACTER ES UN ARRAY VACIO
  const { pathname } = useLocation();//Se saca la constante pathname del hook UseLocation
  const navigate = useNavigate();// se asigna la constante navigate del hook useNavigate
  const [access, setAccess] = useState(false);//Se hace un estado de acces con UseState que es valor false
 

  useEffect(() => {
    !access && navigate('/');
    access && navigate('/home');
 }, [access])

 /*async function login(userData) {
    try {
       const {email, password } = userData;
       const URL = 'http://localhost:3001/rickandmort/login';
       let response = await axios(URL + `?email=${email}&password=${password}`);
       let { access } = response.data;
       console.log(access);
       setAccess(access);  
    } catch (error) {
       window.alert(error);
    }
 }*/
    function logout() {
     setAccess(false);
     navigate('/');
 }
    

const onSearch = async (id) => {
  try {
    if (!id) {
      window.alert("¡No se ingreso un ID!");
      return;
    }
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      window.alert("¡El ID ingresado no es válido!");
      return;
    }
    const existe = characters.some((characters) => characters.id === parsedId);
    if (!existe) {
      let response = await axios(`http://localhost:3001/dogs/${parsedId}`);
      if (response.data.name) {
        setCharacters((characters) => [...characters, response.data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } else {
      window.alert("¡Personaje ya existente!");
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

  const onClose = (id) => {
    console.log(id);
    // const indent = parseInt(id, 10);
    setCharacters((characters) => characters.filter((el) => el.id !== id));
  };


  return (
<div>
{pathname !== "/" && <Nav/>} {/* Pasar la función de logout como prop */}
<Routes>
    <Route path='/' element={<LandingPage>Bienvenido a api Dogs</LandingPage>} />
    <Route path='/home' element={<HomePage/>} />
    <Route path='/about' element={<About />} />
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='*' element={<h1>Not Found</h1>} />
</Routes>
</div>
  );
}

export default App;