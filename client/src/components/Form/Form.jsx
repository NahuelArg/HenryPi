import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Form.module.css"; // Importar el archivo CSS con los estilos

const ControlledForm = () => {
  const [input, setInput] = useState({
    name: '',
    height: '',
    weight: '',
    life_span: '',
    temperament: [],
  });

  console.log(input);

  const [error, setError] = useState({
    name: '',
    height: '',
    weight: '',
    life_span: '',
    temperament: '',
  });

  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    const obtenerTemperamentosDesdeAPI = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temperaments');
        setTemperaments(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error al obtener los temperamentos:', error);
      }
    };

    obtenerTemperamentosDesdeAPI();
  }, []);

  const validate = (input) => {
    setError({
      name: /^[a-zA-Z ]+$/.test(input.name) ? '' : 'Formato no válido',
      height: input.height ? '' : 'Debe ingresar altura',
      weight: input.weight ? '' : 'Debe ingresar peso',
      life_span: input.life_span ? '' : 'Debe ingresar año de vida',
      temperament: input.temperament.length > 0 ? '' : 'Debe ingresar al menos un temperamento',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
    validate({
      ...input,
      [name]: value
    });
  };

  const handleCheckboxChange = (temperamentName) => {
    if (input.temperament.includes(temperamentName)) {
      setInput({
        ...input,
        temperament: input.temperament.filter(name => name !== temperamentName)
      })    
    } else {
      setInput({
        ...input,
        temperament: [...input.temperament, temperamentName]
      })
    }
    validate({ ...input});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validate(input);

    // verifica si algunos values de mi estado local "errors" tiene algun error //
    
    if (Object.values(error).some((errorMessage) => errorMessage !== '')) {
      console.log('Formulario con errores, no se puede enviar.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/dogs', input);
      if (response.data.success) {
        console.log('Datos enviados con éxito');
      } else {
        console.error('Error al enviar datos al servidor');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form>
        <div>
          <label>Nombre</label>
          <input className={styles.input} name="name" value={input.name} onChange={handleChange} />
          <span className={styles.errorMessage}>{error.name}</span>
        </div>
        <div>
          <label>Altura</label>
          <input className={styles.input} name="height" value={input.height} onChange={handleChange} />
          <span className={styles.errorMessage}>{error.height}</span>
        </div>
        <div>
          <label>Peso</label>
          <input className={styles.input} name="weight" value={input.weight} onChange={handleChange} />
          <span className={styles.errorMessage}>{error.weight}</span>
        </div>
        <div>
          <label>Años de vida</label>
          <input className={styles.input} name="life_span" value={input.life_span} onChange={handleChange} />
          <span className={styles.errorMessage}>{error.life_span}</span>
        </div>
        <div>
          <label>Temperamentos:</label>
          {temperaments.map(temperament => (
            <div key={temperament.id}>
              <input
                type="checkbox"
                id={temperament.id}
                value={temperament.name}
                checked={input.temperament.includes(temperament.name)}
                onChange={() => handleCheckboxChange(temperament.name)}
              />
              <label htmlFor={temperament.id}>{temperament.name}</label>
            </div>
          ))}
          <span className={styles.errorMessage}>{error.temperament}</span>
        </div>
        <button className={styles.button} type="submit" onClick={handleSubmit}>Crear Perro</button>
      </form>
    </div>
  );
};

export default ControlledForm;
