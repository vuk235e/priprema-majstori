import { useEffect, useState } from "react";
import { dodajKomentar, dovuciDetaljeMajstora } from "./apiService";

function DetaljiMajstora({ id }) {
  const [majstor, setMajstor] = useState(null);
  const [komentar, setKomentar] = useState("");
  const [error, setError] = useState(null);
  const [dodatKomentar, setDodatKomentar] = useState(1);

  useEffect(() => {
    async function dovuciMajstora() {
      const majstor = await dovuciDetaljeMajstora(id);
      setMajstor(majstor);
    }

    if (id !== null) dovuciMajstora();
  }, [id, dodatKomentar]);

  async function onSubmit(e) {
    e.preventDeafault();
    const kom = komentar;
    try {
      await dodajKomentar(kom, id);
      setKomentar("");
      setDodatKomentar(dodatKomentar * -1);
    } catch (error) {
      setError(error);
    }
  }

  if (id == null || majstor == null) return <></>;

  return (
    <div>
      <h2>Detalji majstora</h2>
      <p>ID: {majstor.id}</p>
      <p>Ime: {majstor.ime}</p>
      <p>Prezime: {majstor.prezime}</p>
      <p>Delatnost: {majstor.delatnost}</p>
      <p>Komentari: </p>
      {majstor.komentari.map((komentar) => (
        <ul key={majstor.id}>
          <li>{komentar}</li>
        </ul>
      ))}
      <form onSubmit={onSubmit}>
        {error !== null ? <p style={{ color: "red" }}>{error}</p> : <></>}
        <input
          type="text"
          placeholder="Uneesite komentar"
          value={komentar}
          onChange={(e) => setKomentar(e.target.value)}
        />
        <button type="submit" disabled={komentar.trim() === ""}>
          Dodaj Komentar
        </button>
      </form>
    </div>
  );
}

export default DetaljiMajstora;
