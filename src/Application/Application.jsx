import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import TarotReading from "../pages/Tarot-reading/TarotReading";

export default function Aplication() {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/tarot-reading' element={<TarotReading/>}/>      
            </Routes>
        </>
  )
}