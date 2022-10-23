import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Update from './pages/Update';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="update/:sys" element={<Update />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
