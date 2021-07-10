import React from "react";

const Scroll = ()=>{
    return(
        <div>
        <div style={{
writingMode: "vertical-rl",
textOrientation: "mixed",
fontFamily:"Roboto",
fontWeight:"500",
fontSize:"13px",
lineHeight:"32px",
letterSpacing:"0.1em",
color:"#0052CC"
        }}> SCROLL
</div>
<br />
<div>
<hr style={{
    writingMode: "vertical-rl",
textOrientation: "mixed",
transform: "rotate(90deg)",
    width: "69px",
height: "0px",
border: "2px solid #0052CC",
marginLeft:"-20px",
color:"#0052CC",
background:"#0052CC"

}} />
</div>
        </div>
    )
}

export default Scroll;