import React, {useState} from 'react';

const Widocznosc = () => {
    const[isOn, setIsOn] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}> {isOn ? "Hello React" : "Wyłączony" }</button>
        </div>
    );
};

export default Widocznosc;