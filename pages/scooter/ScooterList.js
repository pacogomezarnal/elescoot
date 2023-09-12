import styles from './scooter.module.css'
import Scooter from './Scooter';
import { useState } from 'react';

const scData=[
    {
        id:1,
        img:'foto01.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 299
    },
    {
        id:2,
        img:'foto02.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 399
    },
    {
        id:3,
        img:'foto03.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 350
    },
    {
        id:4,
        img:'foto04.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 375
    },
    {
        id:5,
        img:'foto05.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 250
    },
    {
        id:6,
        img:'foto06.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador.",
        precio: 450
    }
]

const ScooterList = () => {

    const [scList,setScList] = useState(scData);
    return(
        <div className="container text-center scooterlist d-flex flex-wrap justify-content-between">
            {
                scList.map(sc=>(
                    <Scooter key={sc.id} scooter={sc} />
                ))
            }
        </div>
    )
};

export default ScooterList;