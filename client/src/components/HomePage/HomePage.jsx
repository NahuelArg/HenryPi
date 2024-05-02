import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDogs } from "../redux/Actions/actions";
import Cards from "../cards/Cards";

export default function HomePage() {
  const dispatch = useDispatch();
  const todosLosPerros = useSelector((state) => state.allDogs);

  // Cargar los perros al iniciar
  useEffect(() => {
    dispatch(allDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div className="container">
        <Cards dogs={todosLosPerros} />
      </div>
    </div>
  );
}

