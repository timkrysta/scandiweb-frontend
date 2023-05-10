function Product({ product }) {
  return (
    <div className="col">
      <label className="card">
        <div className="form-check">
          <input
            className="delete-checkbox"
            type="checkbox"
            name="ids[]"
            value={product.id}
          />
        </div>
        <div className="card-body">
          <div>{product.sku}</div>
          <div>{product.name}</div>
          <div>{product.price} $</div>
          <div><SpecialAttribute product={product}/></div>
        </div>
      </label>
    </div>
  );
}

function SpecialAttribute({ product }) {
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

export default Product;