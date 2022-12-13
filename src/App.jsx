import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ScrollOnTop from './utils/ScrollOnTop.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollOnTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollOnTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
