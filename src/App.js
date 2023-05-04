import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import ProductListPage from './ProductListPage';
import ProductAddPage from './ProductAddPage';

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
