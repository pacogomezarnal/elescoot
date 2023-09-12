import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
    const {darkTheme,cambiarDarkTheme} = useContext(ThemeContext);
    return(
        <nav className="navbar fixed-top bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand d-flex  align-items-center" href="#">
                    <img src="./img/logo.png" alt="Logo" height="35" class="d-inline-block align-text-top"/>
                    <span className="fs-2 ps-3 fw-bold">ElecScoot</span>
                </a>
                <div className="form-check form-switch">
                    <input class="form-check-input" 
                    type="checkbox" role="switch" 
                    id="flexSwitchCheckDefault" 
                    checked={darkTheme===true}
                    onChange={()=>{cambiarDarkTheme();}}/>
                    <label className={darkTheme?"form-check-label text-light":"form-check-label"} for="flexSwitchCheckDefault">Oscuro</label>
                </div>
            </div>
        </nav>
    )
};

export default Header;