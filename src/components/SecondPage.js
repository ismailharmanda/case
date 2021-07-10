import React from "react";
import Button from "./facilities/button";
import HeadlineIcon from "../images/HeadlineIcon";

const SecondPage=()=>{
    return(
        <div className="pt-5 mt-5 pb-5" style={{background:"#BDD7FE",
        height:"1100px"}}>
            <div className="container mt-5 pt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-6">
                    <h1 className="mb-3" style={{fontWeight:"700", fontSize:"48px"}}>App Features Your Customers Want. That Make a Really Great App</h1>
                <p style={{
                    fontSize:"20pX",
                    colot:"#5B6B88"
                    }} className="mt-5"> The world today seems to run on apps. If it is something that people can interact with, then it’s likely that there is an app available for it. 
                </p>
                <div className="mt-5 mb-3">
                <Button
                width="230px" height="60px" borderRadius="8px" background="#0052CC"
                color="white"
                text="Get started"
                icon=">"
                />
                </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex float-right row">
                            <div className="col-6">
                            <HeadlineIcon />
                            <h1
                            className="mt-3 mb-2"
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"700",
                                fontSize:"24px"
                            }}
                            >HeadlineGoes Here</h1>
                            <p
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"400",
                                fontSize:"18px",
                                color:"#5B6B88"
                            }}
                            >If it is something that people can interact with, then it’s likely that there is an app available for it. </p>
                            

                            </div>
                            <div className="col-6">
                            <HeadlineIcon />
                            <h1
                            className="mt-3 mb-2"
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"700",
                                fontSize:"24px"
                            }}
                            >HeadlineGoes Here</h1>
                            <p
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"400",
                                fontSize:"18px",
                                color:"#5B6B88"
                            }}
                            >If it is something that people can interact with, then it’s likely that there is an app available for it. </p>

                            </div>
                            <div className="col-6">
                            <HeadlineIcon />
                            <h1
                            className="mt-3 mb-2"
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"700",
                                fontSize:"24px"
                            }}
                            >HeadlineGoes Here</h1>
                            <p
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"400",
                                fontSize:"18px",
                                color:"#5B6B88"
                            }}
                            >If it is something that people can interact with, then it’s likely that there is an app available for it. </p>
                            

                            </div>
                            <div className="col-6">
                            <HeadlineIcon />
                            <h1
                            className="mt-3 mb-2"
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"700",
                                fontSize:"24px"
                            }}
                            >HeadlineGoes Here</h1>
                            <p
                            style={{
                                fontFamily:"Roboto",
                                fontWeight:"400",
                                fontSize:"18px",
                                color:"#5B6B88"
                            }}
                            >If it is something that people can interact with, then it’s likely that there is an app available for it. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage;