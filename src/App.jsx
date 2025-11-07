import { useState } from 'react'
import './App.css'
import Powitanie from "./useEffect/Powitanie.jsx";
import PierwszeRysowanie from "./PierwszeRysowanie.jsx";
import Klikacz from "./useEffect/Klikacz.jsx";
import Zegar from "./Zegar.jsx";
import LicznikzProgiem from "./useEffect/LicznikzProgiem.jsx";
import StatusSieci from "./useEffect/StatusSieci.jsx";
// import Cwiczenia from "./Cwiczenia/Cwiczenia.jsx";
// import Kroki from "./Cwiczenia/Kroki.jsx";
// import Widocznosc from "./Cwiczenia/Widocznosc.jsx";
// import Kolor from "./Cwiczenia/Kolor.jsx";
// import Klikniecie from "./Cwiczenia/Klikniecie.jsx";
// import Zakupy from "./Cwiczenia/Zakupy.jsx";
// import Egzamin from "./Cwiczenia/Egzamin.jsx";
// import Podstrony from "./Cwiczenia/Podstrony.jsx";
// import Zadanie1 from "./Cwiczenia/ReactRouter/Zadanie1.jsx";
// import Zadanie2 from "./Cwiczenia/ReactRouter/Zadanie2.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/*<Cwiczenia/>*/}
        {/*<Kroki/>*/}
        {/*<Kolor/>*/}
        {/*<Klikniecie/>*/}
        {/*<Zakupy/>*/}
        {/*<Egzamin/>*/}
        {/*<Podstrony></Podstrony>*/}
        {/*<Zadanie1></Zadanie1>*/}
        {/*<Zadanie2/>*/}
      <Powitanie/>
      <PierwszeRysowanie/>
        <Klikacz/>
        <Zegar/>
        <LicznikzProgiem/>
        <StatusSieci/>
    </>
  )
}

export default App
