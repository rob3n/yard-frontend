import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Infratructure = styled.div`
  padding-bottom: 3.5rem;
  padding-left: 1rem;
`;

const Heading = styled.h3`
  border-top: solid 1px #eaebf0;
  padding-top: 2.2rem;
  margin-bottom: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Text = styled.p`
  font-family: Fira Sans;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
`;

export default () =>
  (<Grid>
    <Infratructure>
      <Heading>Инфраструктура</Heading>
      <Row>
        <Col xs={2}>
          <Text>Бассейн</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col xs={2}>
          <Text>Детский сад</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col xs={2}>
          <Text>Частная школа</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col xs={2}>
          <Text>Бассейн</Text>
        </Col>
        <Col xs={2}>
          <Text>Детский сад</Text>
        </Col>
        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>
      </Row>
    </Infratructure>
  </Grid>);