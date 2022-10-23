import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Update from './pages/Update';
function App() {
  return (
    <BrowserRouter basename="/fsu">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="update/:sys" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
