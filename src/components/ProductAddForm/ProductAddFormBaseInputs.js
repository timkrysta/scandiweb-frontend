const PRODUCT_TYPE_OPTIONS = [
  { value: '',          label: 'Type Switcher', disabled: true },
  { value: 'dvd',       label: 'DVD' },
  { value: 'book',      label: 'Book' },
  { value: 'furniture', label: 'Furniture' }
];

function ProductAddFormBaseInputs({ productType, handleProductTypeChange }) {
  return (
    <>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="sku">SKU</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="sku" name="sku" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="name">Name</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="name" name="name" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="price">Price ($)</label>
        <div className="col-sm-8">
          <input type="number" step="0.01" className="form-control" id="price" name="price" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="productType">Type Switcher</label>
        <div className="col-sm-8">
          <select id="productType" name="productType" className="form-select" value={productType} onChange={handleProductTypeChange} required>
            {PRODUCT_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
            ))}
          </select>
          <div className="validation-message"></div>
        </div>
      </div>
    </>
  );
}

export default ProductAddFormBaseInputs;