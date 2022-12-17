import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Admin from './pages/Admin/index.jsx';
import LoginAdmin from './pages/Admin/parts/Loading/index.jsx';
import Home from './pages/Home/Home.jsx';
import ScrollOnTop from './utils/ScrollOnTop.jsx';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <BrowserRouter>
      <div className="App">
        <ScrollOnTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/admin" element={user ? <Admin /> : <LoginAdmin />} />
          </Routes>
        </ScrollOnTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
