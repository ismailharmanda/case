import React from "react";
import Quote from "../images/Quote";
import LogoIpsum from "../images/LogoIpsum";

const ThirdPage=()=>{
    return(
        <div className="mt-n5 gray container justify-content-center text-center">
        <p className="">TESTIMONIAL</p>
        <h1>In Heir Own Words</h1>
        <p>Online businesses utilize newsletters to keep their brand top-of-mind for consumers, establishing authority.</p>
        <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-5">
                <img
                style={{
                    borderRadius:"10px",
                }}
                 src="http://via.placeholder.com/380x380" alt="customer" />
            </div>
            <div className="col-1"><Quote /></div>
            <div className="col-6">
                <p
                className="text-left pb-2"
                style={{
                        fontFamily: "Roboto",
                        fontWeight:"400",
                        fontSize:"18px"
                }}
                >Enim fugiat labore commodo incididunt enim quis aute ex et est aliquip Lorem nulla. Eu amet irure minim pariatur ipsum enim laborum aute velit esse tempor aliquip.</p>
                <h6
                className="text-left my-2 pt-2"
                style={{
                        fontFamily: "Roboto",
                        fontWeight:"500",
                        fontSize:"20px"
                }}
                >
                    Annette Hawkins
                </h6>
                <p
                className="pt-1 text-left mb-2"
                style={{
                        fontFamily: "Roboto",
                        fontWeight:"400",
                        fontSize:"16px"
                }}
                >Art Director of Gillette
                </p>
                <div className="text-left mt-5">
                <LogoIpsum />
                </div>
            </div>
        </div>

        </div>
    )
}

export default ThirdPage