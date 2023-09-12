import Header from "./layout/Header"
import ScooterList from "./scooter/ScooterList";
import Scooter from "./scooter/Scooter";
import { useState,useEffect } from 'react';

const App = ()=> {
    const [selectedSc,setSelectedSc] = useState()
    return(
        <>
            <Header/>
            {selectedSc?<Scooter scooter={selectedSc} />:<ScooterList selectedSc={setSelectedSc}/>}
        </>
    )
}

export default App;