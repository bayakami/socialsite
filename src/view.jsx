
import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function View(props){

  const [count, changeCount] = useState(0);
  const buttonHandler = () => {
      console.log(count)
      changeCount( (prevState) => prevState + 1);
  };

  const buildRows = () =>  {
    return props.todos.map((current) => (
      <tr key={current.username}>
        <td>
          {current.username}
        </td>
        <td>
          {current.post}
        </td>
        <td>
        <button  type="button" class="btn btn-success" onClick={() => buttonHandler()}>Like!</button>
        <p>{count}</p>
        </td>
      </tr>
    )
    )
  }


    return (
      <>
        <Table bordered striped hover variant="secondary" responsive>
          <thead>
            <tr>
              <th>Username</th>
              <th>Post</th>
              <th>Likes</th>
            </tr>
            
          </thead>
          <tbody>
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

}
export default View;
