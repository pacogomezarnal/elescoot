import styles from './scooter.module.css'
import Scooter from './Scooter';

const scList=[
    {
        id:1,
        img:'foto01.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    },
    {
        id:2,
        img:'foto02.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    },
    {
        id:3,
        img:'foto03.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    },
    {
        id:4,
        img:'foto04.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    },
    {
        id:5,
        img:'foto05.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    },
    {
        id:6,
        img:'foto06.png',
        txt: "El patinete puede alcanzar una velocidad máxima de 25 km/h y tiene una capacidad de ascensión de un 16 %. Avanza con solo pulsar ligeramente el acelerador."
    }
]

const ScooterList = () => {
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