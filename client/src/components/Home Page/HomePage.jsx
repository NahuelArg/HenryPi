
import { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { allDogs } from "../redux/Actions/actions";

export default function HomePage(){
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDogs, setFilteredDogs] = useState([]);
    //const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);
    const dispatch = useDispatch()
    const TodosLosperros = useSelector((state)=>state.alldogs)

    
  // Cargar los perros al iniciar
  useEffect(() => {
    dispatch(allDogs())
  }, [dispatch]);



  // Filtrar los perros según el término de búsqueda
 /* useEffect(() => {
    const filtered = dogs.filter(dog =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDogs(filtered);
  }, [dogs, searchTerm]);*/

  
  // Función para manejar el cambio en el término de búsqueda
  /*const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };*/

  // Función para redirigir al detalle de una raza específica
 /* const handleDogClick = id => {
    navigate(`/dog/${id}`);
  };*/

  // Paginar los perros
  /*const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);*/

  // Cambiar de página
  /*const paginate = pageNumber => setCurrentPage(pageNumber);*/

  return (
    <div>
      <h1>HOME PAGE</h1>
      {/* SearchBar */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Listado de Cards */}
        <div>
        <Cards dogs={TodosLosperros}/>
        </div>

      {/* Paginado */}
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={filteredDogs.length}
        paginate={paginate}
      />
    </div>
  );
}

// Componente de Paginado
const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};