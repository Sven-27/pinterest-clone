import React from 'react'
import './Pin.css'

function Pin(props) {
    let sizePin = "medium"

    // if(imageHeight = 4000){
    //     sizePin = 'medium'
    // }else{
    //     sizePin = 'small'
    // }
    return (
        <div className="pin">
            <div className="pin__container">
                <div className={`pin__container ${sizePin}`}>
                     <img src="https://images.unsplash.com/photo-1609608473365-2a5da2478714?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Pin
