import React from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";

function Login (){
    const navigate = useNavigate();

    const login = () => {
        navigate("/DashBoard");
    }
    return(
        <div>
            <h2> Logowanie </h2>
            <button onClick={login}> Login </button>
        </div>
    )
}

function DashBoard (){
    return(
        <div>
            <h2> DashBoard </h2>
        </div>
    )
}


const Zadanie1 = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/DashBoard" element={<DashBoard/>} />
                    <Route path="*" element={<Login/>} />
                </Routes>
            </BrowserRouter>


        </div>
    );
};

export default Zadanie1;