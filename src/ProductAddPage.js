import Footer from './Footer';

function ProductAddPage() {
  return (
    <>
      <header>
        <nav>
          <div style={{ display: "flex" }}>
            <h1>Product Add</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              <button>CANCEL</button>
              <button>SAVE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <form action="">
          <div>
            <label htmlFor="">SKU</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Price ($)</label>
            <input type="text" />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default ProductAddPage;