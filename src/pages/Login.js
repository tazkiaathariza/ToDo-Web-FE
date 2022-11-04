import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {


  const [idUser, setIdUser] = useState('');
  const token = localStorage.getItem('token');
  const [validated, setValidated] = useState(false);
  const direct = useNavigate();

   const loginAccount = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.preventDefault();
    setValidated(true);
    /* await axios.post(
      `https://todo-web-tbinar.herokuapp.com/login`,
      {
         idUser: idUser,
       }
     ); */
    alert("Log In Successful!");
    direct("/")
  };

  return (
    <Container className='login py-5'>
      <Row className='logincontent'>
        <Col sm={7} md={5} lg={4} xl={3} className="formlogin pb-5">
          
          <div className='loginjudul'>
            <h1><b>To Do App</b></h1>
            <p>Login</p>
          </div>
         
         <div className="formLogin mt-4">
          <form onSubmit={loginAccount}>
            <p className='judulForm' style={{backgroundColor:"white"}}>Use 4 digits of character</p>
            <input 
              className='inputLogin'
              maxlength="4"
              id="id_user"
              name="id_user"
              value={idUser}
              onChange={(e) => setIdUser(e.target.value)}
            />
            <button className='buttonLogin mt-3'>Log In</button>
          </form>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Login;
