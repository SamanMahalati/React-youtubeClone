import React from 'react';
import styled from "styled-components"

//Components
import SearchBox from '../shared/SearchBox';

//Styles
const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 5rem;
    background-color: #262626;
`

const Navbar = () => {
    return (
        <Container>
            <SearchBox/>
        </Container>
    );
};

export default Navbar;