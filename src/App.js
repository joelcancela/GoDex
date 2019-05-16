import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pokedex from './pokedex/Pokedex';


function App() {
  return (
    <Container>
      <Row>
      <Pokedex></Pokedex>
      </Row>
    </Container>
  );
}

export default App;
