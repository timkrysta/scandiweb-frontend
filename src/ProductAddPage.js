import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

function ProductAddPage() {

  const handleAddProduct = async () => {
    const form = document.getElementById('product_form');
  
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
      <form action={addProductApiEndpoint} method="POST" id="product_form">
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
            <input type="text" className="form-control" id="sku" name="sku"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" name="name"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Price ($)</label>
          <div className="col-sm-10">
            <input type="number" /* step="0.01" */ className="form-control" id="price" name="price"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="productType">Product Type</label>
          <select id="productType" name="productType" className="form-select">
            <option value="dvd">DVD</option>
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
              <input type="number" className="form-control" id="weight" name="weight"/>
            </div>
          </div>
          <p>Please, provide the weight in kilograms (KG).</p>
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
              <input type="number" className="form-control" id="size" name="size"/>
            </div>
          </div>
          <p>Please, provide the size in megabytes (MB).</p>
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
              <input type="number" className="form-control" id="height" name="height"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Width (CM)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="width" name="width"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Length (CM)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="length" name="length"/>
            </div>
          </div>
          <p>Please, provide dimensions in HxWxL (height/width/length) format.</p>
        </div>
      </>
    );
  }


  return (
    <div>
      <header className="container">
        <nav>
          <div style={{ display: "flex" }}>
            <h1>Product Add</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              <button className="btn btn-primary m-auto" onClick={handleAddProduct}>Save</button>
              <Link className="btn btn-secondary m-auto" to="/product/list">Cancel</Link>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main className="container">
        <ProductAddForm />
      </main>
      <Footer />
    </div>
  );
}

export default ProductAddPage;