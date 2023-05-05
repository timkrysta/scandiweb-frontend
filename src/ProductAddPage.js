import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import API_ENDPOINTS from './config';

function createItemList(items) {
  let html = '<ul>';

  for (let i = 0; i < items.length; i++) {
    html += '<li>' + items[i] + '</li>';
  }

  html += '</ul>';
  return html;
}


const showError = (input, message) => { // TODO(tim): throw exception if input does not exist or if small.feedback does not exist
  const formField = input.parentElement;
  formField.classList.remove('is-valid');
  formField.classList.add('is-invalid');
  const error = formField.parentElement.querySelector('small.feedback');
  error.style.color = '#fd5c70';
  let feedback = '';
  if (Array.isArray(message)) {
    feedback = createItemList(message);
  } else {
    feedback = message;
  }
  error.innerHTML = feedback;
};

const clearAllErrorMessages = () => {
  const errorPlaceholders = document.querySelectorAll('small.feedback');
  errorPlaceholders.forEach(element => {
    element.innerHTML = '';
  });
};

function ProductAddForm({ productType, handleProductTypeChange }) {
  return (
    <form action={API_ENDPOINTS.product.saveApi} method="POST" id="product_form">
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4">
          <ProductAddFormBaseInputs productType={productType} handleProductTypeChange={handleProductTypeChange} />
          <ProductAddFormAdditionalInputs productType={productType}/>
        </div>
      </div>
    </form>
  );
}

function ProductAddFormBaseInputs({ productType, handleProductTypeChange }) {
  return (
    <>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="sku">SKU</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="sku" name="sku" required />
          <small className="feedback"></small>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="name">Name</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="name" name="name" required />
          <small className="feedback"></small>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="price">Price ($)</label>
        <div className="col-sm-8">
          <input type="number" /* step="0.01" */ className="form-control" id="price" name="price" required />
          <small className="feedback"></small>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="productType">Type Switcher</label>
        <div className="col-sm-8">
          <select id="productType" name="productType" className="form-select" value={productType} onChange={handleProductTypeChange} required>
            <option value="" disabled>Type Switcher</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
          <small className="feedback"></small>
        </div>
      </div>
    </>
  );
}

function ProductAddFormAdditionalInputs({ productType }) {
  return (
    <>
      {productType === 'book' && <BookSpecificInputs />}
      {productType === 'dvd' && <DvdSpecificInputs />}
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
            <input type="number" className="form-control" id="weight" name="weight" required />
            <small className="feedback"></small>
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
            <input type="number" className="form-control" id="size" name="size" required />
            <small className="feedback"></small>
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
            <input type="number" className="form-control" id="height" name="height" required />
            <small className="feedback"></small>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="width">Width (CM)</label>
          <div className="col-sm-8">
            <input type="number" className="form-control" id="width" name="width" required />
            <small className="feedback"></small>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="length">Length (CM)</label>
          <div className="col-sm-8">
            <input type="number" className="form-control" id="length" name="length" required />
            <small className="feedback"></small>
          </div>
        </div>
        <p>Please, provide dimensions in HxWxL (height/width/length) format.</p>
      </div>
    </>
  );
}

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
      else if (data.message == 'Validation Failed') {
        clearAllErrorMessages();
        const errors = data.error;
        for (let key in errors) {
          if (errors.hasOwnProperty(key)) {
            showError(document.getElementById(key), errors[key]);
          }
        }
      }
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }

  return (
    <div>
      <header className="container">
        <nav style={{ marginTop: "1rem" }}>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginBottom: "0" }}>Product Add</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              <button className="btn btn-primary m-auto" onClick={handleAddProduct}>Save</button>
              <Link className="btn btn-secondary m-auto" to="/product/list">Cancel</Link>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main className="container">
        <ProductAddForm
          handleProductTypeChange={handleProductTypeChange}
          productType={productType}
        />
      </main>
      <Footer />
    </div>
  );
}

export default ProductAddPage;