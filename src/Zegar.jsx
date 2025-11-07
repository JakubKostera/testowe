import React, {useEffect, useState} from 'react';

const Zegar = () => {

    const [data, setData] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const id = setInterval(()=> {
            setData(new Date().toLocaleTimeString());
            console.log("zegar dodany");
        }, 1000);

        return () => clearInterval(id);
    }, []);
    
    return (
        <div>
            <h3> Godzina {data}</h3>
        </div>
    );
};

export default Zegar;