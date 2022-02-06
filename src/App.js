// import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col className='one' lg={3} md={4} sm={6} xs={12} >   </Col>
        <Col className='two' lg={3} md={4} sm={6} xs={12} >    </Col>
        <Col className='three' lg={3} md={4} sm={6} xs={12} >    </Col>
        <Col className='four' lg={3} md={4} sm={6} xs={12} > </Col>
     </Row>

{/* <Container>
  <Row>
    <Col><div className='one'></div></Col>
    <Col><div className='two'></div></Col>
  </Row>
  <Row>
    <Col><div className='three'></div></Col>
    <Col><div className='four'></div></Col>
    </Row>
</Container> */}
    </div>
  );
}

export default App;
