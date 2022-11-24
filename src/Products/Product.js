import React, { useState } from 'react'
import Button from '../Buttons/Button';
import Popup from '../Popup/Popup';
import './Product.css'

function Product({Product, onDelete}) {
  const [buttonPopup, setButtonPopup] = useState(false);



  return (
      <tr>
        <td>{Product.id}</td>
        <td>{Product.title}</td>
        <td>{Product.price}</td>
        <td>{Product.stock}</td>
        <td>{Product.brand}</td>
        <td className='actions'>
          <Button handle={() => {onDelete(Product.id)}} color="red" icon="fa-solid fa-trash"/>
          <Button handle={()=> setButtonPopup(true)} color="green" icon="fa-solid fa-pen-to-square"/>
        </td>
        <Popup Props={Product} idSelect={Product.id} trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </tr>
  )
}


export default Product