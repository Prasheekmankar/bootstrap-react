import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

function App() {
  return (
    <div className="App">

<Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="https://www.google.com/">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <Row>
        <Col className='one' lg={3} md={4} sm={6} xs={12} >   </Col>
        <Col className='two' lg={3} md={4} sm={6} xs={12} >    </Col>
        <Col className='three' lg={3} md={4} sm={6} xs={12} >    </Col>
        <Col className='four' lg={3} md={4} sm={6} xs={12} > </Col>
     </Row>
        
    </div>
  );
}

export default App;
