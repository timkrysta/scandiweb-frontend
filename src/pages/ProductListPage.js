import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageContent from '../components/PageContent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductListPage/ProductList';
import { PRODUCT_API_ENDPOINTS } from '../config';
import '../styles/style.scss';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCT_API_ENDPOINTS.getProducts);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleMassDelete = async () => {
    const form = document.getElementById('massDeleteForm');

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) { }
  };

  return (
    <>
      <Header heading="Product List">
        <Link to="/product/add" className="btn-add">
          ADD
        </Link>
        <button onClick={handleMassDelete} className="btn-mass-delete">
          MASS DELETE
        </button>
      </Header>
      <PageContent>
        <ProductList products={products} />
      </PageContent>
      <Footer />
    </>
  );
}

export default ProductListPage;
