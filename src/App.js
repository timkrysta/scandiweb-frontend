import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProductListPage from './pages/ProductListPage';
import ProductAddPage from './pages/ProductAddPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/product/list" element={<ProductListPage />} />
          <Route path="/product/add" element={<ProductAddPage />} />
          <Route path="*" element={<Navigate to="/product/list" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
