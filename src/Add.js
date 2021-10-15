import React, { useState} from 'react';
//import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

export default function Add(props){
    const[state, changeState] = useState(
        {
        username:"",
        post:"",
        //likes:0
        }
    );

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "2000",
        "timeOut": "20000",
        "extendedTimeOut": "20000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.clear();
      

    const handleChange = (event) => {
        console.log(event)
        const newState = { ...state};
        newState[event.target.name] = event.target.value;
        changeState(newState);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        props.submitHandler(state);
        console.log("post added");
        toastr.info("You can now view the post on your Home page", "Post added!")
        changeState({username:"", post:""})
    }

    return (
        <>
            <Form onSubmit={(e) => formSubmit(e)}>
                <Form.Group controlId="userName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        required
                        name="username" 
                        type="text" 
                        placeholder="Username" 
                        value={state.username}
                        onChange={ (e) => {handleChange(e);}}
                        />
                </Form.Group>
                <Form.Group controlId="postText">
                    <Form.Label>Post text</Form.Label>
                    <Form.Control
                        required
                        name="post"
                        type="text"
                        placeholder="What's on your mind?" 
                        value={state.post}
                        onChange={ (e) => {handleChange(e);}}
                        />
                </Form.Group>
               
                <Button type="submit" variant="success">
                    Post 
                </Button>
            </Form>
        </>
    );
}