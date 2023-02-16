import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

//functions
import refreshPage from '../functions/RefreshPage';

//Icons
import { VoiceIcon, SearchIcon } from "../utils/constants"

//Styles
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #1f1e25;
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
    height: 3.5rem;
    width: 20rem;
    padding: 1rem;
    border-radius: 3rem;
    font-size: 16px;
    caret-color: #ffc831;
    color: #fff;
    background-color: transparent;
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
            <div onClick={SearchHandler}>
                <SearchIcon sx={{ color: "#fff" }} />
            </div>
            <SearchInput onChange={event => setSearch(event.target.value)} value={search} type="text" placeholder='Search...' />
            <VoiceIcon sx={{ color: "#504f56", cursor: "pointer" }} />
        </Container>
    );
};

export default SearchBox;