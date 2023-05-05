
function Footer() {
  return (
    <footer style={{ /* position: "fixed", bottom: "0", */ width: "100%", /* height: "60px", */ backgroundColor: "#fff" }}>
      {/* "lineHeight":"60px","backgroundColor":"#f5f5f5" */}
      <div className="container">
        <hr />
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