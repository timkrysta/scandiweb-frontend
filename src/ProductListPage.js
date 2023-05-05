import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const getApiEndpoint = 'http://localhost/web-developer-test-assignment/api/product/get.php';
      try {
        const response = await fetch(getApiEndpoint);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);

  function ProductList() {
    const [selectedProductIds, setSelectedProductIds] = useState([]);
    const massDeleteApiEndpoint = 'http://localhost/web-developer-test-assignment/api/product/bulkDelete.php';

    return (
      <div>
        <form className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4" action={massDeleteApiEndpoint} id="massDeleteForm" method="POST">
          {products.length > 0
            ? products.map(product => <Product key={product.id} product={product} setSelectedProductIds={setSelectedProductIds} />)
            : ''}
        </form>
      </div>
    )
  }

  function Product({ product, setSelectedProductIds }) {
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;

      setSelectedProductIds((prevIds) => {
        if (checked) {
          return [...prevIds, value];
        } else {
          return prevIds.filter((id) => id !== value);
        }
      });
    };

    return (
      <div className="col">
        <label className="d-block h-100">
          <div className="card h-100 p-2">
            <div>
              <div className="form-check">
                <input 
                  className="form-check-input delete-checkbox" 
                  type="checkbox" 
                  name="ids[]"
                  value={product.id}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
            <div className="card-body" style={{ userSelect: "none" }}>
              <div style={{ textAlign: "center" }}>
                <div>{product.sku}</div>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>
                  {product.height} {product.width} {product.length}
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }

  const handleMassDelete = async () => {
    const form = document.getElementById('massDeleteForm');
  
    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      });
      window.location.reload(); // Reload the page after the request is sent
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };
  

  return (
    <div>
      <header className="container">
        <nav>
          <div style={{ display: 'flex' }}>
            <h1>Product List</h1>
            <div style={{ display: 'flex', gap: '.25rem', marginLeft: 'auto' }}>
              <Link to="/product/add" className="btn btn-primary m-auto">ADD</Link>
              <button onClick={handleMassDelete} className="btn btn-danger m-auto">MASS DELETE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main className="container">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default ProductListPage;
