import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

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
    <div className="">
      <header>
        <nav>
          <div style={{ display: "flex" }}>
            <h1>Product Add</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              <Link className="btn btn-secondary m-auto" to="/product/list">CANCEL</Link>
              <button className="btn btn-primary m-auto">SAVE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <ProductAddForm />
      </main>
      <Footer />
    </div>
  );
}

export default ProductAddPage;