//UI
import React from "react";
import Card from "react-bootstrap/Card";
import laptop from "./laptop.jpg";

const Home = (props) =>{
    return(
        <div className="conatiner">
                <img src={laptop} width="100%" style={{
                filter: "blur(5px)",   
                position:"relative"
                }}></img>
            <h1 className="center white-text" style={{
                top:"200px", 
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>Code Campers </h1>
            
            
        </div>
    );
}

export default Home;