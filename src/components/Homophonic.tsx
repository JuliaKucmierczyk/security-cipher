import { useState } from "react";
import homophones from "./homophones.json";

type HomophonicKey =
  | "a"
  | "ą"
  | "b"
  | "c"
  | "ć"
  | "d"
  | "e"
  | "ę"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "ł"
  | "m"
  | "n"
  | "ń"
  | "o"
  | "ó"
  | "p"
  | "q"
  | "r"
  | "s"
  | "ś"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "ź"
  | "ż"
  | " ";

const buildReverseMapping = (homophones: Record<string, string[]>) => {
  const reverseMap: Record<string, string> = {};
  for (const [letter, codes] of Object.entries(homophones)) {
    codes.forEach((code) => {
      reverseMap[code] = letter;
    });
  }
  return reverseMap;
};

const reverseHomophones = buildReverseMapping(homophones);

const Homophonic = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const encrypt = (text: string) => {
    let encrypted = "";
    for (let char of text.toLowerCase()) {
      const options = homophones[char as HomophonicKey];
      if (options) {
        encrypted += options[Math.floor(Math.random() * options.length)];
      } else {
        encrypted += char;
      }
    }
    return encrypted;
  };

  const handleEncrypt = () => {
    const encryptedText = encrypt(input);
    setResult(encryptedText);
  };

  const decrypt = (text: string) => {
    const regex = new RegExp(Object.keys(reverseHomophones).join("|"), "g");
    return text.replace(regex, (matched) => reverseHomophones[matched]);
  };

  const handleDecrypt = () => {
    const decryptedText = decrypt(input);
    setResult(decryptedText);
  };

  return (
    <section className="container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Wprowadź tekst"
      />
      <div>
        <button className="btn" onClick={handleEncrypt}>
          Zaszyfruj
        </button>
        <button className="btn" onClick={handleDecrypt}>
          Odszyfruj
        </button>
      </div>
      <div className="result">{result}</div>
    </section>
  );
};

export default Homophonic;
