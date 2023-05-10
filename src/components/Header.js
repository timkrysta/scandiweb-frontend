function Header({ heading, children }) {
  return (
    <header className="container">
      <nav>
        <h1>
          {heading}
        </h1>
        <div className="action-buttons-wrapper">
          {children}
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
