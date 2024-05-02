import Card from "../card/Card.jsx";
import React from "react";
export default function Cards({ dogs }) {
  return (
    <>
      {dogs?.map((dog) => (
        <div key={dog.id} className="card-list-dogs container">
          <Card dog={dog}/>
        </div>
      ))}
    </>
  );
}
