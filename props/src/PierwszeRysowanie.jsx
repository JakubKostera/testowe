import React, {useEffect} from 'react';

const PierwszeRysowanie = () => {

    useEffect(() => {
        console.log("Komponent został wyrenderowany tylko raz!");
    }, []);

    return (
        <div>
            <h2> Zadanie 2</h2>
        </div>
    );
};

export default PierwszeRysowanie;