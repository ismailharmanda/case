import React from "react";
import "../styles/App.css";
import MiddleContainer from "./facilities/middleContainer";
import MiddleImage from "./facilities/middleImage";
import FirstPage from "./FirstPage";
import ForthPage from "./ForthPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FifthPage from "./FifthPage";
import Footer from "./Footer";
import LastSection from "./LastSection";
const App = () => {
  return (
    <div>
      <FirstPage />
      <MiddleContainer />
      <SecondPage />
      <MiddleImage />
      <ThirdPage />
      <ForthPage />
      <FifthPage />
      <Footer />
      <LastSection />
    </div>
  );
};

export default App;
