import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

function ProductAddPage() {

  const handleAddProduct = async () => {
    const form = document.getElementById('addProductForm');
  
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      });
      const data = await response.json();
      if (response.status === 200) {
        window.location = '/product/list';
      }
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };
  

  function ProductAddForm() {
    const addProductApiEndpoint = 'http://localhost/web-developer-test-assignment/api/product/saveApi.php';
    return (
      <form action={addProductApiEndpoint} method="POST" id="addProductForm">
        <ProductAddFormBaseInputs />
        <ProductAddFormAdditionalInputs />
      </form>
    );
  }

  function ProductAddFormBaseInputs() {
    return (
      <>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">SKU</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="sku"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Price ($)</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="price"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="productType">Product Type</label>
          <select id="productType" name="productType" className="form-select">
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
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

        <div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Weight (KG)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="weight"/>
            </div>
          </div>
          <p>Please provide a weight in kilograms (KG).</p>
        </div>
      </>
    );
  }

  function DvdSpecificInputs() {
    return (
      <>

        <div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Size (MB)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="size"/>
            </div>
          </div>
          <p>Please provide a size in megabyte (MB).</p>
        </div>
      </>
    );
  }

  function FurnitureSpecificInputs() {
    return (
      <>
        <div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Height (CM)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="height"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Width (CM)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="width"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Length (CM)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="length"/>
            </div>
          </div>
          <p>Please provide dimensions in HxWxL (height/width/length) format.</p>
        </div>
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
              <button className="btn btn-primary m-auto" onClick={handleAddProduct}>SAVE</button>
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