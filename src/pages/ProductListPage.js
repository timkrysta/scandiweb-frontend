import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import API_ENDPOINTS from '../config';
import Product from '../components/ProductListPage/Product';
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
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);


  const handleMassDelete = async () => {
    const form = document.getElementById('massDeleteForm');

    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      window.location.reload();
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };

  return (
    <div>
      <header className="container">
        <nav style={{ marginTop: "1rem" }}>
          <div style={{ display: 'flex' }}>
            <h1 style={{ marginBottom: "0" }}>Product List</h1>
            <div style={{ display: 'flex', gap: '.25rem', marginLeft: 'auto' }}>
              <Link to="/product/add" className="btn-add">ADD</Link>
              <button onClick={handleMassDelete} className="btn-mass-delete">MASS DELETE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main className="container">
        <div>
          <form
            className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4"
            action={API_ENDPOINTS.product.bulkDelete}
            id="massDeleteForm"
            method="POST"
          >
            {products.length > 0 ? (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductListPage;
