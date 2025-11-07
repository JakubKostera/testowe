import React, { useState } from 'react';

const Zakupy = () => {
    const [zakupy, setZakupy] = useState([]);      // lista produktów
    const [nowyProdukt, setNowyProdukt] = useState('');  // aktualny wpis z inputa

    const handleChange = (e) => {
        setNowyProdukt(e.target.value);
    };

    const dodajProdukt = () => {
        if (nowyProdukt.trim() !== '') {
            setZakupy([...zakupy, nowyProdukt]);
            setNowyProdukt(''); // wyczyść input po dodaniu
        }
    };

    return (
        <div>
            <input
                type="text"
                value={nowyProdukt}
                onChange={handleChange}
                placeholder="Wpisz produkt"
            />
            <button onClick={dodajProdukt}>
                Dodaj
            </button>
            <ul>
                {zakupy.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Zakupy;
