import React, { useState } from "react";
const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwxyzźż";

const getShiftedChar = (
  char: string,
  shift: number,
  alphabet: string
): string => {
  const index = alphabet.indexOf(char.toLowerCase());
  if (index === -1) return char; // Znak spoza alfabetu pozostaje bez zmian.

  const shiftedIndex = (index + shift + alphabet.length) % alphabet.length;
  const shiftedChar = alphabet[shiftedIndex];

  return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
};

const trithemiusEncrypt = (text: string, key: string): string => {
  const keyIndex = alphabet.indexOf(key.toLowerCase());
  return text
    .split("")
    .map((char, index) => getShiftedChar(char, index + keyIndex, alphabet))
    .join("");
};

const trithemiusDecrypt = (text: string, key: string): string => {
  const keyIndex = alphabet.indexOf(key.toLowerCase());
  return text
    .split("")
    .map((char, index) => getShiftedChar(char, -index - keyIndex, alphabet))
    .join("");
};

const Trithemius: React.FC = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const handleEncrypt = () => {
    if (key.length !== 1 || !alphabet.includes(key.toLowerCase())) {
      alert("Klucz musi być pojedynczą literą z polskiego alfabetu.");
      return;
    }
    const encryptedText = trithemiusEncrypt(input, key);
    setEncrypted(encryptedText);
    setDecrypted("");
  };

  const handleDecrypt = () => {
    if (key.length !== 1 || !alphabet.includes(key.toLowerCase())) {
      alert("Klucz musi być pojedynczą literą z polskiego alfabetu.");
      return;
    }
    const decryptedText = trithemiusDecrypt(encrypted, key);
    setDecrypted(decryptedText);
  };

  return (
    <section className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Wprowadź tekst"
      />
      <input
        type="text"
        value={key}
        maxLength={1}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Klucz"
      />
      <div>
        <button className="btn green" onClick={handleEncrypt}>
          Szyfruj
        </button>
        <button
          className="btn green"
          onClick={handleDecrypt}
          disabled={!encrypted}
        >
          Odszyfruj
        </button>
      </div>

      <div className="result result-container">
        <p>Zaszyfrowany: {encrypted}</p>
        <p>Odszyfrowany: {decrypted}</p>
      </div>
    </section>
  );
};

export default Trithemius;
