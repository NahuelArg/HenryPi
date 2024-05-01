import { Link } from 'react-router-dom';
import style from './card.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alldogs, dogsByName } from '../redux/Actions/actions';

export default function Dog({ name, height, id, weidht, life_span, image, temperaments}) {
   const dispatch = useDispatch()
 
   const myChar = {
    name: name,
    height: height,
    weidht: weidht,
    id: id,
    life_span:life_span,
    temperaments:temperaments,
    image: image,
   }


 
  return (
    <div >

      <section>

        <div>
          <img  src={image} alt='' loading="lazy" />
        </div>

        <div>
          <Link to={`/detail/${id}`} className={style.link}>{name}</Link>
        </div>

      </section>
      
      <section className={style.secondSection}>
        <p className={style.data}>{weidht}</p>
        <p className={style.data}>{life_span}</p>
        <p className={style.data}>{height}</p>
        <p className={style.data}>{temperaments}</p>


      </section>
    </div>
  );
}