import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'


export default function Delete({titledelete,colordelete,handleClickDelete}) {
  return (
    <div className='button' style={{backgroundColor:colordelete}} onClick={handleClickDelete}>{titledelete}</div>
  )
}

Delete.defaultProps = {
    titledelete : "nút xóa",
    colordelete : "red"
}

Delete.propTypes =  {
    titledelete: PropTypes.string,
    handleClickDelete : PropTypes.func,
}
