const Navbar = () => {
  // Create a navbar component that will be used to navigate between components
  // If the use clicks on the button, the component should be changed

  const showCezar = () => {
    const cezar = document.querySelector(".cezar");
    if (cezar) {
      cezar.classList.remove("hidden");
    }
  };

  return (
    <nav className="navbar">
      {/* Create three buttons that shows diffrent components */}
      <button className="nav-btn tomato" onClick={showCezar}>
        Szyfr Cezara
      </button>
      <button className="nav-btn blue">Szyfr Polibiusza</button>
      <button className="nav-btn">Kolejny</button>
    </nav>
  );
};

export default Navbar;
