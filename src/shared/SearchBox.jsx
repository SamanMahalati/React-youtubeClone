import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';

//Styles
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #fff;
    border-radius: 3rem;
    padding: 0 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const SearchInput = styled.input`
    height: 3rem;
    width: 23rem;
    padding: 1rem;
    border-radius: 3rem;
    font-size: 16px;
    caret-color: #CA3E47;
`

const SearchBox = () => {
    return (
        <Container>
            <SearchInput type="text" placeholder='Search...'/>
            <SearchIcon sx={{color: "#CA3E47"}}/>
        </Container>
    );
};

export default SearchBox;