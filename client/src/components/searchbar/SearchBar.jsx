import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNameDog } from "../redux/Actions/actions"

export default function SearchBar(){
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch()
  const [dog, setDog] = useState({name:''})

   const handleChange = (ev) =>{
      setDog({name: ev.target.value})
   }
   function handleSubmit (){
    const name = dog.name
    if(!name){
      alert('Ingresa un nombre por favor')
    }else{
      dispatch(getNameDog(name))
      //setName('')
    }

   }

  return (
    <div>
     <div className="buscador" >
           
           <input
            onChange={handleChange} 
            type="text"
            placeholder="buscar"
            value={dog.name}
           
           />
           <button onClick={(e) =>handleSubmit(e)}>buscar</button>

           </div>
       
    </div>
  )
}
