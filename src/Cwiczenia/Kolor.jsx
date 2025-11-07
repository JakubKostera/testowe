import React, {useState} from 'react';

const Kolor = () => {
    const [color, setColor] = useState("");

    function randomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
    return (
        <div>
            <button onClick={() =>  setColor(randomColor())}> Zmień kolor tła</button>
            <div style={{backgroundColor:color, height:"100px", width:"200px"}}></div>
        </div>
    );
};

export default Kolor;