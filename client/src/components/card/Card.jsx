import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ dog }) {
  return (
    < div className={style.cardContainer}>
          <Link className={style.link} to={`/detail/${dog.id}`}>
            <h2>Raza:{dog.nombre}</h2>
          </Link>
          <div className={style.imageContainer}>
          <img src={dog.imagen} alt="Perros Bonitos" width='400px' weight="600px"/>
          </div>
          <h3>Temperamentos:{dog.temperamento}</h3>
          <h3>Peso min:{dog.peso.min}</h3>
          <h3>Peso maximo: {dog.peso.max}</h3>
          <h3>altura minima: {dog.altura.min}</h3>
          <h3>altura maxima:{dog.altura.max}</h3>   
          <h3>Años de vida: {dog.anosDeVida}</h3>
    </div>
  );
}
