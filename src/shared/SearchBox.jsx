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