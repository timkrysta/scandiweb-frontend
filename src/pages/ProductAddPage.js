import { useState } from 'react';
import { Link } from 'react-router-dom';

import PageContent from '../components/PageContent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductAddForm from '../components/ProductAddPage/ProductAddForm/ProductAddForm';
import '../styles/style.scss';

function ProductAddPage() {
  const [productType, setProductType] = useState('');

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }

  return (
    <>
      <Header heading="Product Add">
        <button onClick={handleProductFormSubmit} className="btn-save">
          Save
        </button>
        <Link to="/product/list" className="btn-cancel">
          Cancel
        </Link>
      </Header>
      <PageContent>
        <ProductAddForm
          productType={productType}
          handleProductTypeChange={handleProductTypeChange}
        />
      </PageContent>
      <Footer />
    </>
  );
}

function createItemList(items) {
  const listItems = items.map((item) => `<li>${item}</li>`);
  return `<ul>${listItems.join('')}</ul>`;
}

function showInputErrors(input, errors) {
  const inputWrapper = input.parentElement;
  inputWrapper.classList.remove('is-valid');
  inputWrapper.classList.add('is-invalid');
  const validationMessage = inputWrapper.parentElement.querySelector('.validation-message');
  validationMessage.innerHTML = createItemList(errors);
}

function showFormErrors(formErrors) {
  for (const [inputName, errors] of Object.entries(formErrors)) {
    const input = document.querySelector(`[name="${inputName}"]`);
    if (input) {
      showInputErrors(input, errors);
    }
  }
}

function clearValidationMessages() {
  const validationMessages = document.querySelectorAll('.validation-message');
  validationMessages.forEach((message) => (message.innerHTML = ''));
}

async function handleProductFormSubmit(event) {
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
}

export default ProductAddPage;