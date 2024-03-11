import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Alert, Breadcrumb, Button, Card, Form } from "react-bootstrap"


import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId='Formemail'>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder='Example@mail.com'></Form.Control>
              <Form.Text className='Text Muted'> No share email </Form.Text>
            </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='Formpassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder='Password'></Form.Control>
              </Form.Group>
            </Col>
          </Row>
         
         

          <Button variant="secondary"> Login</Button>

        </Form>
        <Card className='nb-3'>
          <Card.Img src="https://picsum.photos/200/100"></Card.Img>
          <Card.Body>
            <Card.Title>
              Card Exapmle 
            </Card.Title>
            <Card.Text>
              This is an example of react Bootstrap 
            </Card.Text>
            <Button Variant="Primary"> Read More</Button>
          </Card.Body>

        </Card>

        
        <Breadcrumb>
          <Breadcrumb.Item> Test 1 </Breadcrumb.Item>
          <Breadcrumb.Item> Test 2 </Breadcrumb.Item>
          <Breadcrumb.Item active> Test 3 </Breadcrumb.Item>
        
        </Breadcrumb>
        <Alert variant="success">this is a Button</Alert>
        <Button> Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
