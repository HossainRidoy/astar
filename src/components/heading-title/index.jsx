import React from 'react'
import leftIcon from "../../assets/images/left_design.svg"
import rightIcon from "../../assets/images/right_design.svg"

function Heading_title(props) {
    return (
        <div id="headingTitle" className="d-flex align-items-center justify-content-center">
            <img src={leftIcon} alt="" />
            <h1 className="px-2">{props.title}</h1>
            <img src={rightIcon} alt="" />
        </div>
    )
}

export default Heading_title
