import React from 'react';
import styled from "styled-components"

//images
import { Logo } from '../utils/constants';


//Components
import SearchBox from '../shared/SearchBox';

//Styles
const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 5rem;
    background-color: #303841;
`

const LogoContainer = styled.div`
    img {
        height: 7rem;
    }
`

const Navbar = () => {
    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt="Logo" />
            </LogoContainer>
            <SearchBox/>
        </Container>
    );
};

export default Navbar;