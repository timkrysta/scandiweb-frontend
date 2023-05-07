function Product({ product }) {
  function SpecialAttribute() {
    return (
      <>
        {product.weight !== null 
          ? `Weight: ${product.weight} KG` 
          : ''}
        {product.size !== null 
          ? `Size: ${product.size} MB` 
          : ''}
        {product.height !== null && product.width !== null && product.length !== null 
          ? `Dimensions: ${product.height}x${product.width}x${product.length}` 
          : ''}
      </>
    );
  }
  return (
    <div className="col">
      <label style={{ display: "block", height: "100%" }}>
        <div className="card" style={{ padding: ".5rem", height: "100%" }}>
          <div>
            <div className="form-check">
              <input
                className="delete-checkbox form-check-input"
                type="checkbox"
                name="ids[]"
                value={product.id}
              />
            </div>
          </div>
          <div className="card-body" style={{ userSelect: "none" }}>
            <div style={{ textAlign: "center" }}>
              <div>{product.sku}</div>
              <div>{product.name}</div>
              <div>{product.price} $</div>
              <div><SpecialAttribute /></div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Product;