import React, {useEffect, useState} from 'react';

const LicznikzProgiem = () => {
    const [licznik, setLicznik] = useState(0);
    const [komunikat, setKomunikat] = useState("");

    useEffect(() => {
        if( licznik > 10)
        {
            setKomunikat("Uwaga osiagnieto limit klikniec");
            console.log("osiagnieto limit klikniec");
        }
        else{
            setKomunikat("");
        }
    }, [licznik]);
    return (
        <div>
            <h3> Licznik : {licznik} </h3>
            <button onClick={ () => setLicznik(prev => prev + 1)}> Zwieksz licznik</button>
            {
                komunikat && <p style={{color:"red"}}> {komunikat}</p>
            }
        </div>
    );
};

export default LicznikzProgiem;