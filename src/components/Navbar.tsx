const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Create three buttons that shows diffrent components */}
      <button className="nav-btn tomato">Szyfr Cezara</button>
      <button className="nav-btn blue">Szyfr Polibiusza</button>
      <button className="nav-btn">Kolejny</button>
    </nav>
  );
};

export default Navbar;
