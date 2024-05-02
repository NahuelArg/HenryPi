import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import navstyle from "./Nav.module.css";

const Nav=() => {

    const handleSubmit = () => {
        
    }

    return(
        <div className = {navstyle.navBar} >
            <Link className={navstyle.btnNav} to="/about">About</Link>
            <Link className={navstyle.btnNav} to="/home">Home</Link>
            <Link className={navstyle.btnNav} to='/favorites'>♥</Link>
            <SearchBar onSearch={handleSubmit}/>
            <button className={navstyle.btnNav}>Random</button>
            <button className={navstyle.btnNav} title='Salir'>
                
            </button>
        </div>
    )
}
export default Nav