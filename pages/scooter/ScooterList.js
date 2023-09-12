import styles from './scooter.module.css'
import Scooter from './Scooter';
import { useState,useEffect } from 'react';



const ScooterList = ({selectedSc}) => {

    const [scList,setScList] = useState([]);

    useEffect(()=>{
        const fetchSc = async () => {
            const response = await fetch("/api/scData.json");
            const scList = await response.json();
            //console.log(scList);
            setScList(scList.data);
          };
          fetchSc();
    }, []);
    return(
        <div className="container text-center scooterlist d-flex flex-wrap justify-content-between">
            {
                scList.map(sc=>(
                    <Scooter key={sc.id} scooter={sc} selectedSc={selectedSc}/>
                ))
            }
        </div>
    )
};

export default ScooterList;