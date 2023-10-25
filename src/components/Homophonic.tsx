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

  return (
    <section className="container">
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn" onClick={handleEncrypt}>
          Zaszyfruj
        </button>
      </div>
      <div className="result">{result}</div>
    </section>
  );
};

export default Homophonic;
