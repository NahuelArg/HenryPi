import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import navstyle from "./Nav.module.css";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; <FontAwesomeIcon icon={faSignOutAlt} /> */ // Importar el icono de logout

const Nav=({ onSearch, onLogout, onAddRandomCharacter }) => {
    return(
        <div className = {navstyle.navBar} >
            <Link className={navstyle.btnNav} to="/about">About</Link>
            <Link className={navstyle.btnNav} to="/home">Home</Link>
            <Link className={navstyle.btnNav} to='/favorites'>♥</Link>
            <SearchBar onSearch={onSearch}/>
            <button className={navstyle.btnNav} onClick={onAddRandomCharacter}>Random</button>
            <button className={navstyle.btnNav} onClick={onLogout} title='Salir'>
                
            </button>
        </div>
    )
}
export default Nav