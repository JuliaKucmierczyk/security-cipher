const Polibiusz = () => {
  // I want to create a Polybius Cipher that will encrypt and decrypt the text with all the inputs as table

  //   const polibiusz = () => {

  return (
    <section className="container polibiusz">
      <input type="text" placeholder="Type your text" id="polibiusz-text" />
      <table className="polibiusz-table">
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
          <td>
            <input type="text" className="polibiusz-input" />
          </td>
        </tr>
      </table>
      <div>
        <button className="btn blue">Zaszyfruj</button>
        <button className="btn blue">Enkryptuj</button>
      </div>
      <div className="result-container">
        <p>Result will be shown here</p>
      </div>
    </section>
  );
};

export default Polibiusz;
