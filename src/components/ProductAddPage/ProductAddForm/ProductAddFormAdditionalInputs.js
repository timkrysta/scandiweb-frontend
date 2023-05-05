import BookSpecificInputs from './BookSpecificInputs';
import DvdSpecificInputs from './DvdSpecificInputs';
import FurnitureSpecificInputs from './FurnitureSpecificInputs';

function ProductAddFormAdditionalInputs({ productType }) {
  return (
    <>
      {productType === 'book' && <BookSpecificInputs />}
      {productType === 'dvd' && <DvdSpecificInputs />}
      {productType === 'furniture' && <FurnitureSpecificInputs />}
    </>
  );
}

export default ProductAddFormAdditionalInputs;