import React from "react";
import "../styles/App.css"
import FirstPage from "./FirstPage"
import Scroll from "./facilities/scroll";
const App = ()=>{
    return(
    <div>
        <FirstPage />
        <Scroll />
    </div>
    )
}

export default App;