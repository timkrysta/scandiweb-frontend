import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

function ProductAddPage() {
  const [productType, setProductType] = useState('');

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

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }

  function ProductAddForm() {
    const addProductApiEndpoint = 'http://localhost/web-developer-test-assignment/api/product/saveApi.php';
    return (
      <form action={addProductApiEndpoint} method="POST" id="product_form">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4">
            <ProductAddFormBaseInputs handleProductTypeChange={handleProductTypeChange} />
            <ProductAddFormAdditionalInputs />
          </div>
        </div>
      </form>
    );
  }

  function ProductAddFormBaseInputs({ handleProductTypeChange }) {
    return (
      <>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="sku">SKU</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="sku" name="sku"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="name">Name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="name" name="name"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="price">Price ($)</label>
          <div className="col-sm-8">
            <input type="number" /* step="0.01" */ className="form-control" id="price" name="price"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="productType">Type Switcher</label>
          <div className="col-sm-8">
            <select id="productType" name="productType" className="form-select" onChange={handleProductTypeChange}>
              <option value=""          selected={productType === ''}         >Type Switcher</option>
              <option value="dvd"       selected={productType === 'dvd'}      >DVD</option>
              <option value="book"      selected={productType === 'book'}     >Book</option>
              <option value="furniture" selected={productType === 'furniture'}>Furniture</option>
            </select>
          </div>
        </div>
      </>
    );
  }

  function ProductAddFormAdditionalInputs() {
    return (
      <>
        {productType === 'book'      && <BookSpecificInputs />}
        {productType === 'dvd'       && <DvdSpecificInputs />}
        {productType === 'furniture' && <FurnitureSpecificInputs />}
      </>
    );
  }

  function BookSpecificInputs() {
    return (
      <>
        <div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label" htmlFor="weight">Weight (KG)</label>
            <div className="col-sm-8">
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
            <label className="col-sm-4 col-form-label" htmlFor="size">Size (MB)</label>
            <div className="col-sm-8">
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
            <label className="col-sm-4 col-form-label" htmlFor="height">Height (CM)</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" id="height" name="height"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label" htmlFor="width">Width (CM)</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" id="width" name="width"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label" htmlFor="length">Length (CM)</label>
            <div className="col-sm-8">
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