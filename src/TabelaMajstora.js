import { useEffect, useState } from "react";
import { dovuciMajstore } from "./apiService";
import DetaljiMajstora from "./DetaljiMajstora";

function TabelaMajstora() {
  const [selektovaniMajstorId, setSelektovaniMajstorId] = useState(null);

  const [majstori, setMajstori] = useState([]);
  const [ucitavanje, setUcitavanje] = useState(false);

  useEffect(() => {
    async function getMajstori() {
      setUcitavanje(true);
      const majstori = await dovuciMajstore();
      setMajstori(majstori);
      setUcitavanje(false);
    }

    getMajstori();
  }, []);

  if (ucitavanje) return <p>Loading...</p>;

  function prikaziDetalje(id) {
    setSelektovaniMajstorId(id);
  }

  return (
    <>
      <h2>Pregled svih majstora</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Delatnost</th>
            <th>Opsirnije</th>
          </tr>
        </thead>
        <tbody>
          {majstori.map((majstor) => (
            <tr key={majstor.id}>
              <td>{majstor.id}</td>
              <td>{majstor.ime}</td>
              <td>{majstor.prezime}</td>
              <td>{majstor.delatnost}</td>
              <td>
                <button onClick={() => prikaziDetalje(majstor.id)}>
                  Detalji
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DetaljiMajstora id={selektovaniMajstorId} />
    </>
  );
}

export default TabelaMajstora;
