import ProductAddFormBaseInputs from './ProductAddFormBaseInputs';
import ProductAddFormAdditionalInputs from './ProductAddFormAdditionalInputs';
import PRODUCT_API_ENDPOINTS from '../../../config';

function ProductAddForm({ productType, handleProductTypeChange }) {
  return (
    <form action={PRODUCT_API_ENDPOINTS.product.saveApi} method="POST" id="product_form">
      <div className="row">
        <div className="col-12 col-md-7 col-xl-5">
          <ProductAddFormBaseInputs productType={productType} handleProductTypeChange={handleProductTypeChange} />
          <ProductAddFormAdditionalInputs productType={productType} />
        </div>
      </div>
    </form>
  );
}

export default ProductAddForm;