import { useEffect, useState,} from "react";
import{useSelector, useDispatch} from "react-redux";
import styles from "./searchBar.module.css"
import { actionsDogByName } from "../redux/Actions/actions";
import Cards from "../cards/Cards";
export default function SearchBar({onSearch}) {
    const [name, setName] = useState('');
    const handleChange=(event)=>{
        setName(event.target.value);
    };
    const dogsByName = useSelector((state)=>state.dogsByName);
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(actionsDogByName(name))},[dispatch, name])
   return (
      <div className={styles.SearchBar}>
         <input className={styles.input} type='search' value={name} onChange={handleChange}/>
         <button className={styles.btn} onClick={()=>onSearch(name)}>Agregar</button> 
         <Cards characters={dogsByName}/>
      </div>
   );
}