import React from "react";
import HorizontalLine from "./facilities/horizontalLine";
import Button from "./facilities/button";
import ImageCard from "./facilities/imageCard";
import Scroll from "./facilities/scroll";

const FirstPageContent=()=>{
    return(
        <div className="container-fluid pb-5">
        <div className="d-flex  row jusstify-content-center">
            <div className="col-12 col-lg-6 mt-2">
                <h1 className="mb-3" style={{fontWeight:"700", fontSize:"96px"}}>head of a <br /> newspaper <br /> story.</h1>
                <HorizontalLine />
                <p style={{
                    fontSize:"18px"
                }} className="mt-5"
                
                >What's a resume headline, and how can it help you showcase your credentials? A resume headline (also known as a resume title) is a brief phrase that highlights your value as a candidate</p>
                <div className="mt-5 mb-3">
                <Button
                width="230px" height="60px" borderRadius="8px" background="#0052CC"
                color="white"
                text="Get started"
                icon=">"
                /><Button
                width="230px" height="60px" borderRadius="8px"
                border="2px solid #0052CC"
                 background="#FFFFFF"
                color="#0052CC"
                text="ActionLinks"
                icon=">"
                />
                </div>
                <p className="mt-2" style={{
                    fontSize:"14px"
                }}>Need more some information? <a href="/#">Learn More</a></p>


            </div>
            <div className=" col-12 col-lg-6 mt-5">
                <ImageCard />
            </div>
        </div>
        <div className="mt-5">
        <Scroll />
        </div>
        </div>
    )
}


export default FirstPageContent;