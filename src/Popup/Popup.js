import React, { useEffect, useState } from 'react'
import Button from '../Buttons/Button'
import axios from 'axios';
import './Popup.css'

function Popup({Props,idSelect, trigger, setTrigger}) {

    const [detail,setDetail] = useState({
        id: "",
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
    const [products, setProducts] = useState([]);

    const handleChange = (e) => {
        setDetail((detail) => ({...detail, [e.target.id]:e.target.value}))
        console.log(detail)
    }

    const handleSave= async() => {
        const response = await axios.post(`http://localhost:5050/products/${idSelect}`, detail)
    this.setState({ articleId: response.data.id });
      }
    return (trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
        { Object.keys(Props).map((key, i) => (
            <div key={i}>
                <label>{key}</label><br/>
                <input 
                    id={key}
                    onChange={handleChange}
                    type="text" defaultValue={Props[key]}
                ></input>
            </div>
        ))}
            <div className='button_popup'>
                <Button title="Save" handle={() => handleSave()} color="green"/>
                <Button title="Cancel" handle={() => setTrigger(false)} color="red"/>   
            </div>
        </div>
    </div>
    ) : "";
}


export default Popup