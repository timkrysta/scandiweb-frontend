import { useEffect, useState } from 'react';
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
    return (
      <form action="" id="" method="POST" style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
          {products.map(product => (
            <Product product={product} />
          ))}
      </form>
    )
  }

  function Product({ product }) {
    return (
      <label key={product.id} style={{ padding: ".25rem", border: "1px solid black", flexGrow: "1", }}>
        <div>
          <input type="checkbox" className="delete-checkbox" name="ids[]" value={product.id} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div>{product.sku}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>
            {product.height} {product.width} {product.length}
          </div>
        </div>
      </label>
    );
  }

  return (
    <>
      <header>
        <nav>
          <div style={{ display: 'flex' }}>
            <h1>Product List</h1>
            <div style={{ display: 'flex', gap: '.25rem', marginLeft: 'auto' }}>
              <Link className="btn btn-primary" to="/product/add">ADD</Link>
              <button className="btn btn-danger">MASS DELETE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default ProductListPage;
