import logo from "./logo.svg";
import "./App.css";
import TabelaMajstora from "./TabelaMajstora";
import { useEffect, useState } from "react";
import { dovuciMajstore } from "./apiService";
import DetaljiMajstora from "./DetaljiMajstora";
import UnosNovogMajstora from "./UnosNovogMajstora";

function App() {
  //aktivna stranica moze biti pregled-svih ili dodavanje-novog
  const [aktivnaStranica, setAktivnaStranica] = useState("pregled-svih");

  return (
    <div className="App">
      <h1>eMajstori</h1>
      <button
        style={{
          backgroundColor: aktivnaStranica === "pregled-svih" ? "red" : "gray",
        }}
        onClick={() => setAktivnaStranica("pregled-svih")}
      >
        Pregled svih majstora
      </button>
      <button
        style={{
          backgroundColor:
            aktivnaStranica === "dodavanje-novog" ? "red" : "gray",
        }}
        onClick={() => setAktivnaStranica("dodavanje-novog")}
      >
        Dodavanje novog majstora
      </button>
      {aktivnaStranica === "pregled-svih" ? <TabelaMajstora /> : <></>}
      {aktivnaStranica === "dodavanje-novog" ? <UnosNovogMajstora /> : <></>}
    </div>
  );
}

export default App;
