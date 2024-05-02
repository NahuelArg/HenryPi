import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ dog }) {
  return (
    <div className="container-card">
      <section>
        <div className="container-dogs">

          <Link to={`/detail/${dog.id}`} className={style.link}>
            {dog.nombre}
          </Link>
          <img src={dog.imagen} alt="Perros Bonitos" loading="lazy" />
        </div>
      </section>

      <section className={style.secondSection}>
        <div className={style.data}>
          <h5>Su peso</h5>
          Peso minimo: {dog.peso.min} <br />
          Peso maximo: {dog.peso.max}
        </div>
        <div className={style.data}>
          <h3>Su altura</h3>
          altura minima: {dog.altura.min} <br />
          altura maxima: {dog.altura.max}
        </div>
        <div className={style.data}>Años de vida: {dog.anosDeVida}</div>
        <div className={style.data}>temperamento: {dog.temperamento}</div>
      </section>
    </div>
  );
}
