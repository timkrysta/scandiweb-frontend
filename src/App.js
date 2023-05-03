import ProductListPage from './ProductListPage';
import ProductAddPage from './ProductAddPage';

function App() {
  let content;
  let isAddingProduct = false;

  if (isAddingProduct) {
    content = <ProductAddPage />;
  } else {
    content = <ProductListPage />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default App;
