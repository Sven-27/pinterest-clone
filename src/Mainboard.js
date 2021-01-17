import React from 'react'
import './Mainboard.css'
import Pin from './Pin'

function Mainboard(props) {
    return (
        <div className="mainboard">
            {/* array of pins map through pins and with every pin use pin components */}
           <Pin />
        </div>
    )
}

export default Mainboard
