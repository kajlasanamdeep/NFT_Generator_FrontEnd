import { Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import React from 'react';
import NFTGenerator from './pages/NFTGenerator';

function Layout() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
    );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='NFTGenerator' element={<NFTGenerator/>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
