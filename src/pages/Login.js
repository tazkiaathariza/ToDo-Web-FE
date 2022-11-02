import React  from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function Login() {

  return (
    <Container className='login py-5'>
      <Row className='logincontent'>
        <Col sm={7} md={5} lg={4} xl={3} className="formlogin pb-5">
          
          <div className='loginjudul'>
            <h1><b>To Do App</b></h1>
            <p>Login</p>
          </div>
         
         <div className="formLogin mt-4">
          <form>
            <p className='judulForm' style={{backgroundColor:"white"}}>Use 4 digits of character</p>
            <input 
              className='inputLogin'
              maxlength="4"
              id="id_user"
              name="id_user"
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
