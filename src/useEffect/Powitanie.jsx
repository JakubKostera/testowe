import React, {useEffect, useState} from 'react';

const Powitanie = () => {

    const [tekst, setTekst] = useState("Klasa 5P");

    useEffect(() => {
       console.log("Komponent został wyrednerowany");
    });

    return (
        <div>
            <h2> Powitanie {tekst}</h2>
            <button onClick={ () => setTekst("Grupa 1")}> Zmień tekst</button>
        </div>
    );
};

export default Powitanie;