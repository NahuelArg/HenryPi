import React from "react";
import style from "./Detail.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Detail() {
   const [character, setCharacter] = useState({})
   const { name } = useParams();

   useEffect(() => {
       axios(`http://localhost:3001/dogs/${name}`).then(
          ({ data }) => {
             if (data.name) {
                setCharacter(data);
             } else {
                window.alert('No hay personajes con ese ID');
             }
          }
       );
       return setCharacter({});
    }, [name]);

  return (
     <div className={style.container}>
        <div className={style.card}>
           <div className={style.details}>
               <h2>ID | {character.id}</h2>
               <h2>Name | {character.name}</h2>
               <h2>Altura | {character.height}</h2>
               <h2>Peso | {character.weight}</h2>
               <h2>Años de vida | {character.life_span}</h2>
               <h2>Temperamento | {character.temperaments}</h2>

           </div>
           <img src={character.image} />
        </div>
     </div>
  );
}
