import React from "react";
import Cezar from "./Cezar";
import Polibiusz from "./Polibiusz";
import Homophonic from "./Homophonic";

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
      </nav>
      <section>
        {state === "Szyfr Cezara" && <Cezar />}
        {state === "Szyfr Polibiusza" && <Polibiusz />}
        {state === "Szyfr Homofoniczny" && <Homophonic />}
      </section>
    </>
  );
};

export default Navbar;
