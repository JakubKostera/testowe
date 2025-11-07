import React, {useEffect, useState} from 'react';

const StatusSieci = () => {
    const [siec, setSiec] = useState(navigator.onLine);

    useEffect(() => {
        window.addEventListener('online', () => setSiec(true));
        window.addEventListener('offline', () => setSiec(false));
        return () => {
            window.removeEventListener('online', () => setSiec(true));
            window.removeEventListener('offline', () => setSiec(false));
        }
    });
    return (
        <div>
            <h3></h3>
            {
                siec ? <p style={{color:"green"}}> Jestes online</p> :  <p style={{color:"red"}}> Jestes offline</p>

            }
        </div>
    );
};

export default StatusSieci;