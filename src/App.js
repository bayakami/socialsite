import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'
import Add from './Add'
import Profile from './Profile';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  const [counters,changeCounters] = useState([]);
  const [counterIndex, changeCounterIndex] = useState(0);

  
  const [todos, changeTodos] = useState([]);

  const updateListItems = (task) => {
    changeTodos((prevState) => [...prevState, task]);
    localStorage.setItem("list",JSON.stringify([...todos,task]));
  }


  useEffect( () => {
    const listContents = localStorage.getItem("list");
    changeTodos( JSON.parse(listContents) || []);
  },
  []
  );

  return (
    <Router>
      <Navbar bg="success" variant="light" expand="md">
          <Navbar.Brand>Lame Facebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/add">Create post</Link>
              <Link className="nav-link" to="/profile">Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Container>
        <Switch>
          <Route path="/add">
            <Add submitHandler={(task) => updateListItems(task)} />
          </Route>
          <Route exact path="/">
            <View todos={todos} />
          </Route>
          <Route path="/profile">
            Ooops! Profile not found!
          </Route>
          <Route path="/">
            Error: 404 not found
          </Route>
        </Switch>
      </Container>
    </Router>

  );

}
export default App;
