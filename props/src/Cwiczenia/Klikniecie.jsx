import React, {useState} from 'react';

const Klikniecie = () => {
    const [klikniecie, setKlikniecie] = useState({kroki:0});
    function dodajKlikniecie(){
        setKlikniecie({kroki : klikniecie.kroki + 1});
    }
    function resetKlikniecie(){
        setKlikniecie({kroki:0});
    }

    return (
        <div>
            <button onDoubleClick={resetKlikniecie}  onClick={dodajKlikniecie}>
                Zwieksz
            </button>
            <h2> Licznik {klikniecie.kroki}</h2>
        </div>
    );
};

export default Klikniecie;