import { Link } from 'react-router-dom';
import Footer from './Footer';


function ProductAddPage() {
      
  function ProductAddForm() {
    return (
      <form action="">
        <ProductAddFormBaseInputs />
        <ProductAddFormAdditionalInputs />
      </form>
    );
  }

  function ProductAddFormBaseInputs() {
    return (
      <>
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
      </>
    );
  }

  function ProductAddFormAdditionalInputs() {
    return (
      <>
        <BookSpecificInputs />
        <DvdSpecificInputs />
        <FurnitureSpecificInputs />
      </>
    );
  }

  function BookSpecificInputs() {
    return (
      <>
      </>
    );
  }

  function DvdSpecificInputs() {
    return (
      <>
      </>
    );
  }

  function FurnitureSpecificInputs() {
    return (
      <>
      </>
    );
  }

      
  return (
    <>
      <header>
        <nav>
          <div style={{ display: "flex" }}>
            <h1>Product Add</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              {/* <button>CANCEL</button> */}
              <Link to="/product/list">CANCEL</Link>
              <button>SAVE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <ProductAddForm />
      </main>
      <Footer />
    </>
  );
}

export default ProductAddPage;