function Header({ heading, navigation }) {
  return (
    <header className="container">
      <nav style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ marginBottom: "0" }}>
            {heading}
          </h1>
          <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
            {navigation}
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;