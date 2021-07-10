import React from "react";
import "../styles/App.css"
import MiddleContainer from "./facilities/middleContainer";
import MiddleImage from "./facilities/middleImage";
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage";
const App = ()=>{
    return(
    <div>
        <FirstPage />
        <MiddleContainer />
        <SecondPage />
        <MiddleImage />
        <ThirdPage />
    </div>
    )
}

export default App;