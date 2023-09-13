import { useContext } from "react";
import { ThemeContext } from "../App";

const Scooter = ({scooter,selectedSc}) => {

    const {darkTheme,cambiarDarkTheme} = useContext(ThemeContext);

    return(
            <div className={'card mb-3 ' + (darkTheme?'bg-dark-subtle':'')} style={{width:200}} onClick={()=>selectedSc(scooter)}>
                <img src={'./img/scooter/' + (scooter.img?scooter.img:'foto01.png') }className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Titulo Patinete</h5>
                    <p className="card-text">{scooter.txt}</p>
                </div>
                <ul className={'list-group list-group-flush ' + (darkTheme?'list-group-item-dark':'')}>
                        <li className="list-group-item">{scooter.precio}€</li>
                </ul>
            </div>    
    )
}

export default Scooter;