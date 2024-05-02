import { useState } from "react"

export default function SearchBar({onSearch}){
   const [name, setName] = useState("")

   const handleChange = (ev) =>{
      setName(ev.target.value)
   }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={onSearch(name)}>Buscar</button>
    </div>
  )
}
