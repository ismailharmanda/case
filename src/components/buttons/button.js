import React from "react";

const Button=(props)=>{
    return(
        <div>
            <button style={{
                width:props.width, height:props.height, borderRadius:props.borderRadius, background:props.background,
                color:props.color,
                border:props.border
            }} type="button" className="btn">{props.text}</button>
        </div>
    )
}


export default Button;