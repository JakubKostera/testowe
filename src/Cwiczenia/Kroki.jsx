import React, {useState} from 'react';

const Kroki = () => {
    const[kroki, setKroki] = useState({kroki:0});

    function dodajKroki(){
        setKroki({...kroki, kroki: kroki.kroki + 1 });
    }
    return (
        <div>
            <button onClick={dodajKroki}> Dodaj kroki</button>
            <h2> Liczba krokow {kroki.kroki}</h2>
        </div>
    );
};

export default Kroki;