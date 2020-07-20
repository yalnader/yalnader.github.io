//UI
import React, { useState, useEffect } from "react";
import {BrowserRouter, Route} from 'react-router-dom' ;
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Conatiner from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import jQuery from 'jquery'; 



const Register = (props) =>{
    const [frontEnd, setfrontEnd] = useState(false);
    const [robotState, setrobotState] = useState(false);

    const handleFrontEnd = ()=>{
        setfrontEnd(!frontEnd);
    }
    const handleRobotState = () => {
        setrobotState(!robotState);
    }
    return(
        <div className="conatiner">
        <Conatiner>
            <h4 className="center">Register for a Camp</h4>

            <Row style={{textAlign:"center"}}>
            
            <Col md={{ offset: 10 }} >
            <InputGroup style={{marginLeft:"425px" ,width: '410px' }}>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
            
            </Row>
            <Row style={{textAlign:"center"}}>
            
            <Col md={{ offset: 10 }} >
            <InputGroup style={{marginLeft:"425px" ,width: '410px' }}>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
            
            </Row>

            <Row style={{textAlign:"center"}}>
            
            <Col md={{ offset: 10 }} >
            <InputGroup style={{marginLeft:"425px" ,width: '410px' }}>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
            
            </Row>
            {/* <Row style={{textAlign:"center"}}>
                <Form>

                <Form.Group>
                
                    <Form.Check name="position" inline type="radio" id={`inline-radio-1`} label="Camper" />
                    <Form.Check name="position" inline type="radio" id={`inline-radio-2`} label="Volunteer" />
                    <Form.Check name="position" inline type="radio" id={`inline-radio-3`} label="Instructor" />
                
                </Form.Group>
                </Form>
            </Row> */}
            <div className="row">

                <div className="col s1 offset-s4">
                    <p>Position:</p>
                </div>
                <div className="col s1 ">
                    <p>
                    <label >
                        <input className="red" name="group1" type="radio" />
                        <span>Camper</span>
                    </label>
                    </p>
                </div>
                <div className="col s1 ">
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Volunteer</span>
                    </label>
                    </p>
                </div>
                <div className="col s1 ">
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Instructor</span>
                    </label>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s4 offset-s4">
                    Additional Files:  <input type="file" required></input>
                    
                    
                </div>
            </div>
            
        <br></br>

           
            {!frontEnd ? <div  className="row"> {/* use the onClick to change the state variable thus changing the it between true and false changing the color*/ }
                <div className="col s4 offset-s4">
                <div onClick = {handleFrontEnd} className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Front-End Devlopment - Remote</span>
                    <p>Learn the basics of web dev. Work with HTML, CSS, and JS to create 
                        dynamic webpages.
                    </p>
                    </div>
                
                </div>
                </div>
            </div> : <div  className="row"> {/* use the onClick to change the state variable thus changing the it between true and false changing the color*/ }
                <div className="col s4 offset-s4">
                <div onClick = {handleFrontEnd} className="card red darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Front-End Devlopment - Remote</span>
                    <p>Learn the basics of web dev. Work with HTML, CSS, and JS to create 
                        dynamic webpages.
                    </p>
                    </div>
                    
                </div>
                </div>
            </div>}

            {!robotState ? <div  className="row"> {/* use the onClick to change the state variable thus changing the it between true and false changing the color*/ }
                <div className="col s4 offset-s4">
                <div onClick = {handleRobotState} className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Robotics Camp - In Person</span>
                    <p>Understand Robtics and build some cool Robots with in person classes.
                    </p>
                    </div>
                    
                </div>
                </div>
            </div> : <div  className="row"> {/* use the onClick to change the state variable thus changing the it between true and false changing the color*/ }
                <div className="col s4 offset-s4">
                <div onClick = {handleRobotState} className="card red darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Robotics Camp - In Person</span>
                    <p>Understand Robtics and build some cool Robots with in person classes.
                    </p>
                    </div>
                    
                </div>
                </div>
            </div>}

            
           

            <br></br>
        <br></br>
            <div className="row">
                <div className="col s4 offset-s4">
                    <button className="red darken-1 btn waves-effect waves-light " type="submit" name="action">Submit
                    </button> 
                </div>
            </div>
            
               
            
            
            
            </Conatiner>
        </div>
    );
}

export default Register;