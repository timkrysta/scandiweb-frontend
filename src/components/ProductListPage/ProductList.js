import Product from './Product';
import { PRODUCT_API_ENDPOINTS } from '../../config';

function ProductList({ products }) {
  return (
    <form
      className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4"
      action={PRODUCT_API_ENDPOINTS.bulkDeleteProducts}
      id="massDeleteForm"
      method="POST"
    >
      {products.length > 0 ? (
        products.map((product) => <Product key={product.id} product={product} />)
      ) : (
        <p>No products found.</p>
      )}
    </form>
  );
}

export default ProductList;