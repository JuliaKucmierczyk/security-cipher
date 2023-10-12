const Cezar = () => {
  const cipher = document.querySelector("#cipher-text");
  const num = document.querySelector("#cipher-num");
  const btn = document.querySelector(".btn");
  const result = document.querySelector(".result-container p");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesarCipher(str: string, num: number): string {
    num = num % 26;
    const strLowerCase = str.toLowerCase();
    let newStr = "";

    for (let i = 0; i < strLowerCase.length; i++) {
      const currentLetter = strLowerCase[i];

      if (currentLetter === " ") {
        newStr += currentLetter;
        continue;
      }

      const currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newStr += alphabet[newIndex].toUpperCase();
      } else {
        newStr += alphabet[newIndex];
      }
    }
    return newStr;
  }

  if (btn && cipher && num && result) {
    btn.addEventListener("click", () => {
      const cipherInput = cipher as HTMLInputElement;
      const numInput = num as HTMLInputElement;
      if (cipherInput && numInput && result) {
        result.innerHTML = caesarCipher(
          cipherInput.value,
          parseInt(numInput.value)
        );
      }
    });
  }

  return (
    <section className="container">
      <div className="input-container">
        <input type="text" placeholder="Type your text" id="cipher-text" />

        <input type="number" placeholder="Type your number" id="cipher-num" />
      </div>
      <button className="btn tomato">Zaszyfruj</button>
      <div className="result-container">
        <p>Result will be shown here</p>
      </div>
    </section>
  );
};

export default Cezar;
