import React from 'react'
import Button from '../Buttons/Button'
import './Popup.css'

function Popup({Props, trigger, setTrigger}) {

    return (trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
        { Object.keys(Props).map((key, i) => (
            <div key={i}>
            <label>{key}</label><br/>
            <input type="text" defaultValue={Props[key]}></input>
            </div>
        ))}
            <div className='button_popup'>
                <Button title="Save" handle={handleSave} color="green"/>
                <Button title="Cancel" handle={() => setTrigger(false)} color="red"/>   
            </div>
        </div>
    </div>
    ) : "";
}

function handleSave() {
    alert('Đã lưu');
}

export default Popup