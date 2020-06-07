import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Alert } from 'reactstrap';

export default class App extends React.Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <Container className="mt-4">
          <Alert color="secondary">
            Usando Container
          </Alert>
        </Container>
        <Container className="mt-4" fluid={ true }>
          <Alert color="secondary">
            Usando Container com fluid
          </Alert>
        </Container>
        <Container>
        <Row>
          <Col>1</Col> <Col>2</Col> <Col>3</Col> <Col>4</Col>
          <Col>5</Col> <Col>6</Col> <Col>7</Col> <Col>8</Col>
          <Col>9</Col> <Col>10</Col> <Col>11</Col> <Col>12</Col>
        </Row>
          <Row>
            <Col>Ocupa4/12</Col><Col>Ocupa4/12</Col><Col>Ocupa4/12</Col>
          </Row>
          <Row>
            <Col xs="3">Ocupa3/12</Col> <Col xs="9">Ocupa9/12</Col>
          </Row>
          <Row>
            <Col xs="12">Ocupa12/12</Col>
        </Row>
        </Container>
        <Container>
        <Col xs="12" sm="6" md="4" lg="3" xl="2">
          1
        </Col>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              1
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              2
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              3
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              4
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              5
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" xl="2">
              6
            </Col>
            </Row>
          <Row xs="1" sm="2" md="3" lg="4" xl="6">
            <Col>1</Col> <Col>2</Col> <Col>3</Col> <Col>4</Col> <Col>5</Col> <Col>6</Col> 
          </Row>
        </Container>
      </>
    );
  }
}


