import React, {useEffect, useState} from 'react';

const Klikacz = () => {
    const [klikniecia, setKlikniecia] = useState(0);

    useEffect(() => {
        console.log('Efekt został uruchomiony. Kliknięto ${klikniecia} razy');
    }, [klikniecia]);

    return (
        <div>
            <button onClick={() => setKlikniecia(prev => prev + 1)}> Klik </button>
            <h3> Kliknięto {klikniecia}</h3>

        </div>
    );
};

export default Klikacz;