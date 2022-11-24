import React from 'react'
import Product from './Product'
import './Products.css'

function Products({products, setProducts}) {
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5050/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((product) => product.id !== id));
  };
  
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

  return (
    <div className=''>
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
    </div>
  )
}



export default Products