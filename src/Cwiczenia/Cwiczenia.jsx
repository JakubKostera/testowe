import React, {useState} from 'react';

const Cwiczenia = () => {
    const [dane, setDane] = useState([]);
    const[user, setUser] = useState({imie:"Anna", wiek:20});
    function dodajDane(){
        setDane([...dane, "Nowa wartość"]);
    }
    function zmienWiek(){
        setUser({...user, wiek:user.wiek + 1});
    }
    return (
        <div>
            <button onClick={dodajDane}> dodaj </button>
            <ul>
                {
                    dane.map((dane, index) =>
                        <li key={index}>{dane}</li>
                    )}
            </ul>
        </div>
    );
};

export default Cwiczenia;