import React from "react";
import Cezar from "./Cezar";
import Polibiusz from "./Polibiusz";
import Homophonic from "./Homophonic";
import Trithemius from "./Trithemius";

const Navbar = () => {
  const [state, setState] = React.useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setState(value);
  };

  return (
    <>
      <nav className="navbar">
        <button
          className="nav-btn tomato"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          value={"Szyfr Cezara"}
        >
          Szyfr Cezara
        </button>
        <button
          className="nav-btn blue"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          value={"Szyfr Polibiusza"}
        >
          Szyfr Polibiusza
        </button>
        <button
          className="nav-btn"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          value={"Szyfr Homofoniczny"}
        >
          Szyfr Homofoniczny
        </button>
        <button
          className="nav-btn green"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          value={"Szyfr Trithemiusa"}
        >
          Szyfr Trithemiusa
        </button>
      </nav>
      <section className="home">
        {state === "Szyfr Cezara" && <Cezar />}
        {state === "Szyfr Polibiusza" && <Polibiusz />}
        {state === "Szyfr Homofoniczny" && <Homophonic />}
        {state === "Szyfr Trithemiusa" && <Trithemius />}
      </section>
    </>
  );
};

export default Navbar;
