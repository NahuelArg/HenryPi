import Card from '../card/Card.jsx';
import React from 'react';
export default function Cards({dogs}) {
   return <div>
      
         <Card
         id= {dogs.id}
         key = {dogs.id}
         name = {dogs.name}
         height={dogs.height}
         weidht={dogs.weidht}
         image={dogs.image}
         life_span = {dogs.life_span}
         temperaments={dogs.temperaments}
         />
      
   </div>;
}
