import React from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate, useParams} from "react-router-dom";


function Home() {
    return (
        <>
            <h2> Strona główna </h2>
        </>
    )
}

    function About() {
    const navigate = useNavigate();
    const kontakt = () => {
        navigate("/kontakt")
    }
        return (
            <>
                <h2> O nas</h2>
                <button onClick={kontakt}> Przejdz do kontakt </button>
            </>
        )
}
    function Kontakt() {
        return (
            <>
                <h2> Kontakt</h2>
            </>
        )
    }
        function NotFound(){
            return(
                <>
                    <h2> Strona nie zostala znaleziona</h2>
                </>
            )


}
function User() {
    const {id, nazwa} = useParams()
    return(
        <>
            <h2> Id użytkownika {id}</h2>
        </>
    )
}
const Podstrony = () => {
    return (

        <div>
            <BrowserRouter>
                <ul>
                    <li> <Link to="/">Strona główna</Link> </li>
                    <li>  <Link to="/about">O nas</Link></li>
                        <li> <Link to="/kontakt">Kontakt</Link></li>

                </ul>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/kontakt" element={<Kontakt/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default Podstrony;