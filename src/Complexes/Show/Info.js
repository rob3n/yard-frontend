import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Info = styled.section`
  display: flex;
  border-bottom: solid 1px #e0e0e1;
  padding-top: 2.5rem;
  padding-bottom: 1.6rem;
  padding-left: .5rem;
`;

const Item = styled.div`margin-right: 3rem;`;

const Heading = styled.h2`
  font-family: Philosopher;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #3e4247;
  margin: 0;
`;

const Subheading = styled.small`
  display: block;
  margin-top: .5rem;
  font-family: Fira Sans;
  font-size: .875rem;
  font-weight: 300;
  line-height: 1.57;
  text-align: left;
  color: #a9afb6;
`;

export default props => {
  return (
    <Grid>
      <Info>
        <Item>
          <Heading>
            {props.offers}
            <Subheading>предложений</Subheading>
          </Heading>
        </Item>
        <Item>
          <Heading>
            {props.architect}
            <Subheading>архитектор</Subheading>
          </Heading>
        </Item>
        <Item>
          <Heading>
            {props.builder}
            <Subheading>застройщик</Subheading>
          </Heading>
        </Item>
      </Info>
=======
import { Grid, Row } from "react-flexbox-grid";

export default props => {
  return (
    <Grid>
      <Row>
        <h2 className="complex-info-title">
          {props.offers}
          <small className="complex-info-subheading">предложений</small>
        </h2>
        <h2 className="complex-info-title">
          {props.architect}
          <small className="complex-info-subheading">предложений</small>
        </h2>
        <h2 className="complex-info-title">
          {props.builder}
          <small className="complex-info-subheading">предложений</small>
        </h2>
      </Row>
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
    </Grid>
  );
};
