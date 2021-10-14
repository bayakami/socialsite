import React, { useState} from 'react';
//import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';

export default function Add(props){
    const[state, changeState] = useState(
        {
        username:"",
        post:"",
        //likes:0
        }
    )

    const handleChange = (event) => {
        console.log(event)
        const newState = { ...state};
        newState[event.target.name] = event.target.value;
        changeState(newState);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        props.submitHandler(state);
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
               
                <Button type="submit" variant="success" onClick={()=>toastr.info("You can now view the post on your Home page", "Post added!", {autoClose: 1000 })}>
                    Post 
                </Button>
            </Form>
        </>
    );
}