import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductAddForm from '../components/ProductAddPage/ProductAddForm/ProductAddForm';
import '../styles/style.scss';


function ProductAddPage() {
  const [productType, setProductType] = useState('');

  const createItemList = (items) => {
    let html = '<ul>';
    for (let i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul>';
    return html;
  };

  const showError = (input, message) => { // TODO(tim): throw exception if input does not exist or if small.feedback does not exist
    const formField = input.parentElement;
    formField.classList.remove('is-valid');
    formField.classList.add('is-invalid');
    const error = formField.parentElement.querySelector('.validation-message');
    error.style.color = '#fd5c70';
    const feedback = Array.isArray(message) ? createItemList(message) : message;
    error.innerHTML = feedback;
  };

  const clearValidationMessages = () => {
    const validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach((message) => (message.innerHTML = ''));
  };


  const handleProductFormSubmit = async () => {
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
      else {
        clearValidationMessages();
        const errors = data.error;
        for (let key in errors) {
          if (errors.hasOwnProperty(key)) {
            showError(document.getElementById(key), errors[key]);
          }
        }
      }
    } catch (error) {}
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }

  return (
    <div>
      <Header 
        heading="Product Add" 
        navigation={<>
          <button className="btn-save" onClick={handleProductFormSubmit}>Save</button>
          <Link className="btn-cancel" to="/product/list">Cancel</Link>
        </>}
      />
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