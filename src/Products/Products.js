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
                    <Product key={product.id} Product={product} onDelete={deleteProduct}/>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}



export default Products