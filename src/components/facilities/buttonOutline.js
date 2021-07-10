import React from "react";

const ButtonOutline=(props)=>{
    return(
        <div className="d-inline mx-2 btn-outline">
            <button style={{
                width:props.width, height:props.height, borderRadius:props.borderRadius, background:props.background,
                color:props.color,
                border:props.border
            }} type="button" className="btn">{props.text}<span className="float-right mr-2">{props.icon}</span></button>
        </div>
    )
}


export default ButtonOutline;