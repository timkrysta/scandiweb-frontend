import { useEffect, useState } from 'react';
import Footer from './Footer';

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

  function Product({ product }) {
    return (
      <label key={product.id} style={{ padding: ".25rem", border: "1px solid black", flexGrow: "1", }}>
        <div>
          <input type="checkbox" name="ids[]" value={product.id} />
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
              <button>ADD</button>
              <button>MASS DELETE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <form action="" id="" method="POST" style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
          {products.map(product => (
            <Product product={product} />
          ))}
        </form>
      </main>
      <Footer />
    </>
  );
}

export default ProductListPage;