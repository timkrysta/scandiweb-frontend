
function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: "0", height: "57px", width: "100%", backgroundColor: "#fff", paddingBottom: "1rem", boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)" }}>
      <div className="container">
        <hr style={{ marginTop: "0" }} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>
            Scandiweb Test assignment
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;