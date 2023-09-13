import Header from "./layout/Header"
import ScooterList from "./scooter/ScooterList";
import Scooter from "./scooter/Scooter";
import ScooterDt from "./scooter/ScooterDt";
import { useState,useEffect,createContext } from 'react';

export const ThemeContext = createContext({})

const App = ()=> {
    const [selectedSc,setSelectedSc] = useState()
    const [darkTheme, setDarkTheme] = useState(false);

    const cambiarDarkTheme = () => setDarkTheme(!darkTheme);
    return(
        <>
            <ThemeContext.Provider value={{darkTheme,cambiarDarkTheme}}>
                <Header/>
                {selectedSc?<ScooterDt scooter={selectedSc} selectedSc={setSelectedSc} />:<ScooterList selectedSc={setSelectedSc}/>}
            </ThemeContext.Provider>
        </>
    )
}

export default App;