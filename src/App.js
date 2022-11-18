import { useEffect, useState } from 'react';
import './App.css';
import Products from './Products/Products';


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
      <Products products={products}/>
    </div>
  );
}

export default App;
