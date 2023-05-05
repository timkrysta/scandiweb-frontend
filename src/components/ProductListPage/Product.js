function Product({ data }) {
  function SpecialAttribute() {
    return (
      <>
        {data.weight !== null ? `Weight: ${data.weight} KG` : ''}
        {data.size !== null ? `Size: ${data.size} MB` : ''}
        {data.height !== null && data.width !== null && data.length !== null ? `Dimensions: ${data.height}x${data.width}x${data.length}` : ''}
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
                value={data.id}
              />
            </div>
          </div>
          <div className="card-body" style={{ userSelect: "none" }}>
            <div style={{ textAlign: "center" }}>
              <div>{data.sku}</div>
              <div>{data.name}</div>
              <div>{data.price} $</div>
              <div><SpecialAttribute /></div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Product;