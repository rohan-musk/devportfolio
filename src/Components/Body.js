import React from 'react'
import img from '../Images/3js.png'
import './css/Body.css'
import BodyText from './BodyText'

const Body = () => {
    return (
        <div className="body">
            <img src={img} />
            <BodyText />
        </div>
    )
}

export default Body
