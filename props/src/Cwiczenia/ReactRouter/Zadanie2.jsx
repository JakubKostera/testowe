import React from 'react';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";


function About () {
    return(
        <>
            <h2> O nas</h2>
        </>
    )
}

function login() {
    const navigate = useNavigate();

    function handleLogin(){
        navigate("/Dash")
    }
}

const Zadanie2 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                        <Route path="/About" element={<About/>}></Route>
                        <Route path="old-about" element={<Navigate to="/About" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Zadanie2;