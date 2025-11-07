import React, {useState} from 'react';
import { dane } from './dane.js';

const Egzamin = () => {
    const[obrazy, setObrazy] = useState();
    const[ filtry, setFiltry] = useState({
        kwiaty:false,
        zwierzeta:false,
        auta:false,
    })

        const filtruj = (e) => {
            const {name, checked} = e.target;
            setFiltry((prev) => ({...prev, [name]: checked}));
        }
            const filtrujDane = dane.filter( img =>{
                if(img.category === 1 && filtry.kwiaty) return true;
                if(img.category === 2 && filtry.zwierzeta) return true;
                if(img.category === 3 && filtry.auta) return true;
                return false;

            });

        const policzPobrania = (id) => {
            setObrazy( prev => prev.map ( img =>
            img.id === id ? {...img, downloads:img.downloads + 1}
            :img ));
        }

    return (
        <div className="galeria">

            <h3> Kategoria zdjęć</h3>
            <label>
                <input type="checkbox"  checked={filtry.kwiaty} name="kwiaty" onClick={filtruj}/> Kwiaty
                <input type="checkbox" checked={filtry.zwierzeta} name="zwierzeta"/> Zwierzęta
                <input type="checkbox" checked={<filtry className="auta"></filtry>} name="samochody"/> Samochody
            </label>


            {
                dane.map(item =>
                    <div key={item.id}>
                    <img
                        className="dane"
                        src={item.filename}
                        alt={item.alt}
                    />
                        <h4> Pobrań : {item.downloads}</h4>
                        <button onClick={()=>policzPobrania(item.id)}> Pobierz</button>

                    </div>
                )
            }
        </div>
    );
};

export default Egzamin;
