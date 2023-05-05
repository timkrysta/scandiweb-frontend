import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/ProductListPage/Product';
import API_ENDPOINTS from '../config';
import '../styles/style.scss';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.product.get);
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
    <div>
      <Header
        heading="Product List"
        navigation={<>
          <Link to="/product/add" className="btn-add">ADD</Link>
          <button onClick={handleMassDelete} className="btn-mass-delete">MASS DELETE</button>
        </>}
      />
      <main className="container">
        <div>
          <form
            className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4"
            action={API_ENDPOINTS.product.bulkDelete}
            id="massDeleteForm"
            method="POST"
          >
            {products.length > 0
              ? (products.map((product) => (<Product key={product.id} data={product} />)))
              : (<p>No products found.</p>)
            }
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductListPage;
