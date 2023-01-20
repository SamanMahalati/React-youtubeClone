import React from 'react';

//Style
import styled from "styled-components";

//Components
import { NewVideo, Sidebar } from '.';


//Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <NewVideo />
        </Container>
    );
};

export default Home;