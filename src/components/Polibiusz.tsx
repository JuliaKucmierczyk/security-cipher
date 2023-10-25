import React, { useState } from "react";

const Polibiusz: React.FC = () => {
  const [grid, setGrid] = useState<string[][]>(
    Array(5)
      .fill([])
      .map(() => Array(7).fill(""))
  );
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [decryptInput, setDecryptInput] = useState<string>("");
  const [decryptOutput, setDecryptOutput] = useState<string>("");

  const handleInputChange = (row: number, col: number, value: string) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const areAllInputsFilled = grid.every((row) => row.every((cell) => cell));

  const hasUniqueValues = (() => {
    const flatValues = grid.flat();
    const uniqueValues = [...new Set(flatValues)];
    return flatValues.length === uniqueValues.length;
  })();

  const encrypt = () => {
    if (!areAllInputsFilled) {
      alert("Wypełnij wszystkie pola!");
      return;
    }
    if (!hasUniqueValues) {
      alert("Wartości w inputach nie mogą się powtarzać!");
      return;
    }

    const map: Record<string, string> = {};
    grid.forEach((row, i) => {
      row.forEach((char, j) => {
        if (char) {
          map[char] = `${i + 1}${j + 1}`;
        }
      });
    });

    const encrypted = inputText
      .split("")
      .map((char) => map[char] || char)
      .join("");
    setOutputText(encrypted);
  };

  const decrypt = () => {
    const reverseMap: Record<string, string> = {};
    grid.forEach((row, i) => {
      row.forEach((char, j) => {
        if (char) {
          reverseMap[`${i + 1}${j + 1}`] = char;
        }
      });
    });
    const segments = decryptInput.match(/\d{2}/g) || [];

    const decrypted = segments.map((num) => reverseMap[num] || num).join("");
    setDecryptOutput(decrypted);
  };

  return (
    <div className="container">
      {grid.map((row, i) => (
        <div key={i}>
          <span className="liczby">{i + 1}</span>
          {row.map((_, j) => (
            <input
              className="polibiusz-input"
              key={j}
              maxLength={1}
              value={grid[i][j]}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
            />
          ))}
        </div>
      ))}

      <div className="result-container">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your text"
        />
        <button className="btn blue" onClick={encrypt}>
          Zaszyfruj
        </button>
        <div>{outputText}</div>

        <input
          value={decryptInput}
          onChange={(e) => setDecryptInput(e.target.value)}
          placeholder="Enter the numbers"
        />
        <button className="btn blue" onClick={decrypt}>
          Dekryptuj
        </button>
        <div className="result">{decryptOutput}</div>
      </div>
    </div>
  );
};

export default Polibiusz;
