import React from "react";

const Button=(props)=>{
    return(
        <div className="d-inline mr-2">
            <button style={{
                width:props.width, height:props.height, borderRadius:props.borderRadius, background:props.background,
                color:props.color,
                border:props.border
            }} type="button" className="btn">{props.text}<span className="float-right mr-2">{props.icon}</span></button>
        </div>
    )
}


export default Button;