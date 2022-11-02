import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Menu from './Menu';

function Home() {
  
  return (
    <>
    <Menu/>
    <Container fluid className='todo py-5'>
      <Row className='todocontent'>
        <Col sm={7} md={5} lg={4} xl={3} className="formtodo pb-5">
          
          <div className='todojudul'>
            <h1><b>My To Do List</b></h1>
          </div>
         
         <div className="formTodo">
          <form>
            <p className='judulTodo' style={{backgroundColor:"white"}}>Input your future tasks</p>
            <textarea
              className='inputLogin'
              as="textarea"
              rows={3}
              id="user_4id"
              name="user_4id"
            />
            <button type='submit' className='buttonTodo mt-3'>
                Add
            </button>
          </form>
          </div>

          <div className="TodoList mt-4">
            <p>Your Task :</p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
