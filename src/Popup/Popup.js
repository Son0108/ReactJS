import React, { useState } from 'react'
import Button from '../Buttons/Button'
import './Popup.css'

function Popup({Props, idSelect, trigger, setTrigger, handleSave}) {

    const [detail,setDetail] = useState({
        id: Props.id,
        title:Props.title,
        description:Props.description,
        price:Props.price,
        discountPercentage:Props.discountPercentage,
        rating:Props.rating,
        stock:Props.stock,
        brand:Props.brand,
        category:Props.category,
        thumbnail:Props.thumbnail,
        image:Props.image
    });

    const handleChange = (e) => {
        setDetail((detail) => ({...detail, [e.target.id]:e.target.value}))
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
                <Button title="Save" handle={() => handleSave(idSelect, detail, setTrigger)} color="green"/>
                <Button title="Cancel" handle={() => setTrigger(false)} color="red"/>   
            </div>
        </div>
    </div>
    ) : "";
}


export default Popup