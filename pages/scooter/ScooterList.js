import styles from './scooter.module.css'
import Scooter from './Scooter';
import Filter from "../layout/Filter";
import { useState,useEffect } from 'react';
import { useContext } from "react";
import { ThemeContext } from "../App";



const ScooterList = ({selectedSc}) => {

    const [scList,setScList] = useState([]);
    const [scListOriginal,setScListOriginal] = useState([]);
    const {darkTheme,cambiarDarkTheme} = useContext(ThemeContext);

    useEffect(()=>{
        const fetchSc = async () => {
            const response = await fetch("/api/scData.json");
            const scList = await response.json();
            //console.log(scList);
            setScList(scList.data);
            setScListOriginal(scList.data);
          };
          fetchSc();
    }, []);

    const filtrarScooter = (e) =>{
        if(e.target.value!=""){
            const precio=parseInt(e.target.value);
            const scListNuevo = scListOriginal.slice();
            const scListFiltrado = scListNuevo.filter((sc) => sc.precio > precio);
            setScList(scListFiltrado);
        }
    };
 

    return(
        <>
        <Filter filtrarScooter={filtrarScooter}/>
        <div className={"container-fluid  pt-5 "+ (darkTheme?'bg-body-secondary':'')}>
            <div className={"container text-center d-flex flex-wrap justify-content-between p-0 "+ (darkTheme?'bg-body-secondary':'')}>
                {
                    scList.map(sc=>(
                        <Scooter key={sc.id} scooter={sc} selectedSc={selectedSc}/>
                    ))
                }
            </div>
        </div>
        </>
    )
};

export default ScooterList;