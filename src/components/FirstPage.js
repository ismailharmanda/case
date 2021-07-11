import React from "react";
import Navbar from "./NavBar";
import FirstPageContent from "./FirstPageContent";
import Rectangle from "./facilities/rectangle";

const FirstPage = () => {
  return (
    <div className="container">
      <Rectangle />
      <Navbar />
      <FirstPageContent />
    </div>
  );
};
export default FirstPage;
