import React from "react";
import Cezar from "./Cezar";
import Polibiusz from "./Polibiusz";

const Navbar = () => {
  // if user clicks on a button, the state will change
  const [state, setState] = React.useState("");

  // create a function that will handle the click event
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setState(value);
  };

  return (
    <>
      <nav className="navbar">
        {/* Create three buttons that shows diffrent components */}
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
          value={""}
        >
          Kolejny
        </button>
      </nav>
      <section>
        {state === "Szyfr Cezara" && <Cezar />}
        {state === "Szyfr Polibiusza" && <Polibiusz />}
      </section>
    </>
  );
};

export default Navbar;
