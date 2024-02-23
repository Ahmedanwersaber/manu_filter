import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Row >
      
    <Navbar style={{position: "sticky" ,sticky:"top",fixed:'top'}} expand="lg" className=".bg-dark-subtle px-3 nav" bg="dark" variant='dark' >
      <Container >
        <Navbar.Brand href="#">Restorant </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="mx-2"
             
            />
            <Button className="btn-search">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </Row>
  );
}

export default NavScrollExample;