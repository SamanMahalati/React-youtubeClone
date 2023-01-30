import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

//functions
import refreshPage from '../functions/RefreshPage';

//Icons
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
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
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
    const navigate = useNavigate()
    const [search, setSearch] = useState("")   
    
    const SearchHandler = () => {
        navigate(`/search/${search}`)
        refreshPage()
        setSearch("")
    }

    return (
        <Container>
            {console.log(search)}
            <SearchInput onChange={event => setSearch(event.target.value)} on value={search} type="text" placeholder='Search...' />
            <div onClick={SearchHandler}>
                <SearchIcon sx={{ color: "#CA3E47" }} />
            </div>
        </Container>
    );
};

export default SearchBox;