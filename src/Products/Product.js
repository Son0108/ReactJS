import React, { useState } from 'react'
import Button from '../Buttons/Button';
import Popup from '../Popup/Popup';
import './Product.css'

function Product({Product}) {

  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <tr>
        <td>{Product.id}</td>
        <td>{Product.title}</td>
        <td>{Product.price}</td>
        <td>{Product.stock}</td>
        <td>{Product.brand}</td>
        <td className='actions'>
          <Button handle={handleDelete} color="red" icon="fa-solid fa-trash"/>
          <Button handle={()=> setButtonPopup(true)} color="green" icon="fa-solid fa-pen-to-square"/>
        </td>
        <Popup Props={Product} trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </tr>
  )
}

function handleDelete() {
  alert("Đã xóa");
}


export default Product