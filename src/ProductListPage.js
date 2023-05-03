import Footer from './Footer';

function ProductListPage() {
  const products = [];
  const productsList = products.map(product =>
    <label>
      <input type="checkbox" name="ids[]" value={product.id}/>
      <div> 
        <span>{product.sku}</span>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <span>
          {product.height}
          {product.width}
          {product.length}
        </span>
      </div>
    </label>
  );
  
  return (
    <>
      <header>
        <nav>
          <div style={{ display: "flex" }}>
            <h1>Product List</h1>
            <div style={{ display: "flex", gap: ".25rem", marginLeft: "auto" }}>
              <button>ADD</button>
              <button>MASS DELETE</button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <main>
        <form action="" id="" method="POST">
          {productsList}
        </form>
      </main>
      <Footer />
    </>
  )
}

export default ProductListPage;