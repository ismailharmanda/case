import React from "react";
import "../styles/App.css"
import MiddleContainer from "./facilities/middleContainer";
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
const App = ()=>{
    return(
    <div>
        <FirstPage />
        <MiddleContainer />
        <SecondPage />
    </div>
    )
}

export default App;