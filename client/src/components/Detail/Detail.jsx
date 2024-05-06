import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {dogsById} from '../redux/Actions/actions'
import { useEffect } from "react";

function DogDetails() {
   const dispatch = useDispatch();
   const params = useParams();
  useEffect(() => {
    dispatch(dogsById(params.id));
  },[params.id])
  const myDog = useSelector((state)=>state.detail)
  console.log(myDog);
  return (
    <div>
      <Link to = "/home">
         <button>Volver a la pagina principal</button>
      </Link>
      <h2>{myDog.nombre}</h2>
      <img src={myDog.imagen} alt="Perros Bonitos" width='400px' weight="600px"/>
      <p>ID: {myDog.id}</p>
      <p>Altura {myDog.altura}</p>
      <p>Peso  {myDog.peso}</p>
      <p>Años de vida: {myDog.anosDeVida}</p>
      <p>Temperamento: {myDog.temperamento}</p>
    </div>
  );
}

export default DogDetails;
