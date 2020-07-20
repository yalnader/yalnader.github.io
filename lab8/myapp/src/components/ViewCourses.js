//UI
import React, { useState } from "react";
import Register from './Register';
import { NavLink } from 'react-router-dom' ;
import {BrowserRouter, Route} from 'react-router-dom' ;
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Conatiner from "react-bootstrap/Container";

const ViewCourses = (props) =>{
    const [inPTrue, setInPTrue] = useState(true);
    const [remoteTrue, setRemoteTrue] = useState(true)
    
    const handleFilter = ()=>{
        let inP = document.getElementById("inperson");
        let remote = document.getElementById("remote");
        
        setInPTrue(inP.checked);
        setRemoteTrue(remote.checked);
        };
    return(
        <div className="conatiner">
        <Conatiner >
            <h4 className="center">View Camps</h4>
            {/* <div className="row">
                <div className="input-field col s4 offset-s4">
                    <label>Search Camps: </label> <input type="text" required></input>
                </div>
            </div> */}
            <Row style={{textAlign:"center"}}>
            
            <Col md={{ offset: 10 }} >
            <InputGroup style={{marginLeft:"250px" ,width: '800px' }}>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
            
            </Row>

            <form onClick={handleFilter} action="#">
                <div className="row">
                    <div className="col s2 offset-s4">
                        <p>
                        <label>
                            <input name="filter" type="checkbox" id="inperson" />
                            <span>In Person</span>
                        </label>
                        </p>
                        </div>
                    <div className="col s1">
                        <p>
                        <label>
                            <input name="filter" type="checkbox" id="remote" />
                            <span>Remote</span>
                        </label>
                        </p>
                    </div>
                </div>
                
            </form>

            {!remoteTrue ? null : <div className="row">
                <div className="col s4 offset-s4">
                <div className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Front-End Devlopment - Remote</span>
                    <p>Learn the basics of web dev. Work with HTML, CSS, and JS to create 
                        dynamic webpages.
                    </p>
                    </div>
                    <div className="card-action">
                        <NavLink className="red-text" to='/register'>Register for Camp</NavLink>
                    </div>
                </div>
                </div>
            </div>}
            
            {!inPTrue ? null : <div className="row">
                <div className="col s4 offset-s4">
                <div className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Robotics Camp - In Person</span>
                    <p>Understand Robtics and build some cool Robots with in person classes.
                    </p>
                    </div>
                    <div className="card-action">
                    <NavLink className="red-text" to='/register'>Register for Camp</NavLink>
                    </div>
                </div>
                </div>
            </div>}
            

            </Conatiner>
        </div>
    );
}

export default ViewCourses;