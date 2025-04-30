import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ContactPage from './pages/Contact.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
