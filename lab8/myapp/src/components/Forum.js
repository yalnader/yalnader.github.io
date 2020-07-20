//UI
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Forum = (props) =>{
    return(
        <div className="conatiner">
            <h4 className="center">Forum</h4>
            <div className="row">
                <div className="input-field col s4 offset-s4">
                    <label>Search Thread: </label> <input type="text" required></input>
                </div>
            </div>
            
            <div className="row">
                <div className="col s4 offset-s4">
                <div className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Help with JS</span>
                    <p>I've worked with JS for a little but I still dont Understand let, var, and const...
                    </p>
                    </div>
                    <div className="card-action">
                    <a href="#" className="red-text">Reply</a>




                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col s4 offset-s4">
                <div className="card white">
                    <div className="card-content red-text">
                    <span className="card-title">Linked List not Working</span>
                    <p>I've made my Singly Linked List but I can't get the push method to work...
                    </p>
                    </div>
                    <div className="card-action">
                    <a href="#" className="red-text">Reply</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col s4 offset-s4">
                <div className="card red darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Create Thread</span>
                    <InputGroup style={{marginLeft:"0px" ,width: '500px' }}>
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Title"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                className="white-text"
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>Body</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="white-text" as="textarea" aria-label="With textarea" style={{maxWidth:"500px" }} />
            </InputGroup>
                    </div>
                    <div className="card-action">
                    <a href="#" className="white-text">Post</a>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Forum;