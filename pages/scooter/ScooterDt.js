import { useContext } from "react";
import { ThemeContext } from "../App";

const ScooterDt = ({scooter,selectedSc}) => {

    const {darkTheme,cambiarDarkTheme} = useContext(ThemeContext);

    return(
        <div className={"container-fluid  py-5 "+ (darkTheme?'bg-body-secondary':'')}>
            <div className= {"container text-center"+ (darkTheme?'bg-dark-subtle':'')} >
                <div className="row">
                    <div className="col-4">
                    <img src={'./img/scooter/' + (scooter.img?scooter.img:'foto01.png') } className="border card-img-top rounded"/>
                    </div>
                    <div className="col-8 text-start">
                        <h1 >Titulo Patinete</h1>
                        <p>{scooter.txt}</p>
                        <p>{scooter.precio}€</p>
                        <button type="button" class="btn btn-dark" onClick={()=>selectedSc(null)}>Volver al listado</button>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default ScooterDt;