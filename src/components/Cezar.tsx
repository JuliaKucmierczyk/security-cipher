const Cezar = () => {
  // create a function that will encrypt the text
  const encrypt = (text: string, num: number) => {
    const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwxyzźż";
    const alphabetArray = alphabet.split("");
    const textArray = text.split("");
    let result = "";

    textArray.forEach((letter) => {
      if (!alphabet.includes(letter)) {
        result += letter;
        return;
      }
      let index = alphabetArray.indexOf(letter);
      let newIndex = (index + num) % alphabetArray.length;
      // If newIndex is negative, make it wrap around the alphabet
      if (newIndex < 0) newIndex += alphabetArray.length;
      result += alphabetArray[newIndex];
    });

    return result;
  };

  // create a function that will decrypt the text
  const decrypt = (text: string, num: number) => {
    const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwxyzźż";
    const alphabetArray = alphabet.split("");
    const textArray = text.split("");
    let result = "";

    textArray.forEach((letter) => {
      if (!alphabet.includes(letter)) {
        result += letter;
        return;
      }
      let index = alphabetArray.indexOf(letter);
      let newIndex =
        (index - num + alphabetArray.length) % alphabetArray.length;
      result += alphabetArray[newIndex];
    });

    return result;
  };

  // create a function that will show the result
  const showResult = (result: string) => {
    const resultContainer = document.querySelector(".result-container p");
    if (resultContainer) {
      resultContainer.innerHTML = result;
    }
  };

  // create a function that will handle the click event
  const handleClickEncrypt = () => {
    const textInput = document.querySelector(
      "#cipher-text"
    ) as HTMLInputElement;
    const numInput = document.querySelector("#cipher-num") as HTMLInputElement;
    const text = textInput.value;
    const num = numInput.value;
    const result = encrypt(text, Number(num));
    showResult(result);
  };

  const handleClickDecrypt = () => {
    const textInput = document.querySelector(
      "#cipher-text"
    ) as HTMLInputElement;
    const numInput = document.querySelector("#cipher-num") as HTMLInputElement;
    const text = textInput.value;
    const num = numInput.value;
    const result = decrypt(text, Number(num));
    showResult(result);
  };

  return (
    <section className="container cezar" hidden={true}>
      <div className="input-container">
        <input type="text" placeholder="Wprowadź tekst" id="cipher-text" />
        <input type="number" placeholder="Numer podstawienia" id="cipher-num" />
      </div>
      <div>
        <button className="btn tomato" onClick={handleClickEncrypt}>
          Zaszyfruj
        </button>
        <button className="btn tomato" onClick={handleClickDecrypt}>
          Odszyfruj
        </button>
      </div>

      <div className="result result-container">
        <p></p>
      </div>
    </section>
  );
};

export default Cezar;
