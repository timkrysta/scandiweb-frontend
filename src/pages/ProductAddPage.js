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

  const showInputErrors = (input, errors) => {
    const inputWrapper = input.parentElement;
    inputWrapper.classList.remove('is-valid');
    inputWrapper.classList.add('is-invalid');
    const validationMessage = inputWrapper.parentElement.querySelector('.validation-message');
    validationMessage.innerHTML = createItemList(errors)
  };

  const showFormErrors = (formErorrs) => {
    for (let inputName in formErorrs) {
      if (formErorrs.hasOwnProperty(inputName)) {
        const input = document.querySelector(`[name="${inputName}"]`);
        showInputErrors(input, formErorrs[inputName]);
      }
    }
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

      if (response.status === 200) {
        window.location = '/product/list';
        return;
      }

      clearValidationMessages();
      const data = await response.json();
      showFormErrors(data.error);
    } catch (error) { }
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