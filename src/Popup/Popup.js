import React, { useState } from 'react'
import Button from '../Buttons/Button'
import './Popup.css'

function Popup({Props, trigger, setTrigger}) {

    const handleChange = (e) => {
        Object.getOwnPropertyNames(Props).map((id) => {
            console.log(Props[id])
        })
    }

    const handleSave = () => {
        alert('Đã lưu');
    }
    return (trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
        { Object.keys(Props).map((key, i) => (
            <div key={i}>
                <label>{key}</label><br/>
                <input 
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