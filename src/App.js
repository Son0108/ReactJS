import { useEffect, useState } from 'react';
import './App.css';
import Products from './Products/Products';
import {Route, Link, NavLink, Routes, Outlet } from 'react-router-dom';
import About from './About';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let json = await fetch('http://localhost:5050/products');
      json = await json.json();
      setProducts(json);
    }
  
    fetchData()
  },[])
  
  return (
    <div className="App">
      <div className='header'>
        <nav>
          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='content'>
      <Routes>
        <Route path="/"element={<Products products={products}/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
