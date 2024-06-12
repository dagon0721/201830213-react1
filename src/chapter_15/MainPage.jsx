import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  color: ${(props) => (props.dark ? 'white' : 'dark')};
  background: ${(props) => (props.dark ? 'black' : 'white')};
  border: 1px solid black;
`;

const RoundButton = styled(Button)`
  border-radius: 16px;
`;

const Block = styled.div`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  margin: 0.5rem 0;
  color: white;
  text-align: center;
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '2rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '3rem',
    backgroundColor: 'blue',
  },
];

export default function App() {
  return (
    <Wrapper>
      <Title>안녕 리액트!</Title>
      <Button>Normal</Button>
      <Button dark>Dark</Button>
      <RoundButton>Round Button</RoundButton>
      <br />
      <br />
      {blockItems.map((item, index) => (
        <Block
          key={index}
          padding={item.padding}
          backgroundColor={item.backgroundColor}
        >
          {item.label}
        </Block>
      ))}
    </Wrapper>
  );
}
