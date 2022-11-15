import React from 'react'
import Button from './Button'
import './Product.css'

function Product({Product}) {
  return (
      <tr>
        <td>{Product.id}</td>
        <td>{Product.title}</td>
        <td>{Product.price}</td>
        <td>{Product.stock}</td>
        <td>{Product.brand}</td>
        <td className='actions'>
          <Button handle={handleDelete} color="red" icon="fa-solid fa-trash"/>
          <Button handle={handleEdit} color="green" icon="fa-solid fa-pen-to-square"/>
        </td>
      </tr>
  )
}

function handleDelete() {
  alert("Đã xóa");
}

function handleEdit() {
  alert("Chỉnh sửa");
}

export default Product