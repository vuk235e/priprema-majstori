const baseUrl = "http://localhost:5155/api";

export async function dovuciMajstore() {
  const odgovor = await fetch(baseUrl + "/Majstori");
  return await odgovor.json();
}

export async function dovuciDetaljeMajstora(id) {
  const odgovor = await fetch(baseUrl + "/Majstori/" + id);
  return await odgovor.json();
}

export async function dodajMajstora(majstor) {
  const odgovor = await fetch(baseUrl + "/Majstori", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(majstor),
  });

  return await odgovor.json();
}

export async function dodajKomentar(komentar, id) {
  const odgovor = await fetch(baseUrl + "/Majstori/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(komentar),
  });
  return await odgovor.json();
}
