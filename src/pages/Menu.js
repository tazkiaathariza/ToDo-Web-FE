import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style.css';
import { useNavigate } from "react-router-dom";



function Menu() {


  const direct = useNavigate();

  /* Log Out */
  const logOut = () => {
    localStorage.clear();
    alert("logout");
    direct("/login")
  };

  return (
    <>
        <Navbar key="lg" expand="lg" className="shadowBox shadow-sm" sticky="top" style={{backgroundColor:"white"}}>
          <Container fluid style={{backgroundColor:"white"}}>
            <Navbar.Brand href="#" className="navbarbrand subtitle" style={{color:'#45577B', backgroundColor:"white"}}>
              To Do App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasRight-expand-lg`} aria-label="Toggle navigation"  data-bs-target="#offcanvasRight"
       />
            <Navbar.Offcanvas
              id={`offcanvasRight-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className="navbarside"
            >
              <Container className="navbarside" style={{backgroundColor:"white"}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className="subtitle">
                  tazkiaathariza
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body> 
                <Nav className="justify-content-end flex-grow-1 pe-2 navkonten" style={{color:'#45577B', backgroundColor:"white"}}>
                  
                  <div className="navright">
                    <Nav.Link href="/" onClick={logOut}><b>Log Out</b></Nav.Link>
                  </div>
              
                </Nav>
              </Offcanvas.Body>
              </Container>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  );
}

export default Menu;