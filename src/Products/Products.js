import React, {useState} from 'react'
import Button from '../Buttons/Button';
import Product from './Product'
import Popup from '../Popup/Popup';
import './Products.css'

function Products({products, setProducts}) {
  const [buttonPopups, setButtonPopups] = useState(false);
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchVlaue] = useState("")
  const [details, setDetails] = useState({
    id:"",
    title:"",
    description:"",
    price:"",
    discountPercentage:"",
    rating:"",
    stock:"",
    brand:"",
    category:"",
    thumbnail:"",
    image:""
});
const deleteProduct = async (id) => {
  await fetch(`http://localhost:5050/products/${id}`, {
    method: "DELETE",
  });
  setProducts(products.filter((product) => product.id !== id));
};
const handleAdd = async (idSelect, detail, setTrigger) => {
  await fetch(`http://localhost:5050/products`,{
    method:'POST',
    body: JSON.stringify(detail),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
  });
  setTrigger(false)
  const fetchData = async () => {
    let json = await fetch('http://localhost:5050/products');
    json = await json.json();
    setProducts(json);
  }
  fetchData()
}
  
const handleSave = async (idSelect, detail, setTrigger) => {
  await fetch(`http://localhost:5050/products/${idSelect}`,{
    method:'PUT',
    body: JSON.stringify(detail),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
  });
  setTrigger(false)
  const fetchData = async () => {
    let json = await fetch('http://localhost:5050/products');
    json = await json.json();
    setProducts(json);
  }
  fetchData()
};

const handleInput = (e) => {
  setInputValue(e.target.value);
}

const handleSearch = () => {
  setSearchVlaue(inputValue);
}

if(searchValue !== "") {
  return (
    <div >
      <div className='search'>
        <input onChange={handleInput}></input>
        <Button handle={handleSearch} title='Search' color="blue"/>
      </div>
      <br/>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
                {
                products.filter(productFilter => productFilter.title.substr(0,searchValue.length) == searchValue).map((product) => (
                    <Product key={product.id} Product={product} onDelete={deleteProduct} handleSave={handleSave}/>
                ))
                }
            </tbody>
        </table>
        <Button handle={()=> setButtonPopups(true)} color="blue" title="ADD"/>
        <Popup Props={details} trigger={buttonPopups} setTrigger={setButtonPopups} handleSave={handleAdd}/>
    </div>
  )
} else {
  return (
    <div >
      <div className='search'>
        <input onChange={handleInput}></input>
        <Button handle={handleSearch} title='Search' color="blue"/>
      </div>
      <br/>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
                {
                products.map((product) => (
                    <Product key={product.id} Product={product} onDelete={deleteProduct} handleSave={handleSave}/>
                ))
                }
            </tbody>
        </table>
        <Button handle={()=> setButtonPopups(true)} color="blue" title="ADD"/>
        <Popup Props={details} trigger={buttonPopups} setTrigger={setButtonPopups} handleSave={handleAdd}/>
    </div>
  )
}
}



export default Products