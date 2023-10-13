const Cezar = () => {
  // create a function that will encrypt the text
  const encrypt = (text: string, num: number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const textArray = text.split("");
    let result = "";
    textArray.forEach((letter) => {
      const index = alphabetArray.indexOf(letter);
      const newIndex = index + num;
      result += alphabetArray[newIndex];
    });
    return result;
  };

  // create a function that will decrypt the text
  const decrypt = (text: string, num: number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const textArray = text.split("");
    let result = "";
    textArray.forEach((letter) => {
      const index = alphabetArray.indexOf(letter);
      const newIndex = index - num;
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
  const handleClick = () => {
    const textInput = document.querySelector(
      "#cipher-text"
    ) as HTMLInputElement;
    const numInput = document.querySelector("#cipher-num") as HTMLInputElement;
    const text = textInput.value;
    const num = numInput.value;
    const result = encrypt(text, Number(num));
    showResult(result);
  };

  return (
    <section className="container cezar" hidden={true}>
      <div className="input-container">
        <input type="text" placeholder="Type your text" id="cipher-text" />
        <input type="number" placeholder="Type your number" id="cipher-num" />
      </div>
      <button className="btn tomato" onClick={handleClick}>
        Zaszyfruj
      </button>
      <div className="result-container">
        <p>Result will be shown here</p>
      </div>
    </section>
  );
};

export default Cezar;
