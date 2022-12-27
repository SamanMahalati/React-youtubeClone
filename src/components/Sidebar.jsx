import React from 'react';
import styled from 'styled-components';

import { Categories } from '../utils/constants';

//Styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 10rem;
    max-width: 20rem;
    background-color: #404040;
    height: 100vh;
    gap: 1rem;
    padding: 1.5rem 0;
    `

const SideBarItem = styled.div`
    display: flex;
    align-items: center;
    background-color: #262626;
    width: 85%;
    padding: 0.7rem 1rem;
    border-radius: 1rem;
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
        background-color: red;
        transition: 0.3s;
        div {
            color: #fff;
        }
    }
`

const SideBarIcon = styled.div`
    color: #D72323;
`
const SideBarName = styled.span`
    color: #fff;
`


const Sidebar = () => {
    return (
        <Container>
            {
                Categories.map(Categorie => 
                    <SideBarItem>
                        <SideBarIcon>{Categorie.icon}</SideBarIcon>
                        <SideBarName>{Categorie.name}</SideBarName>
                    </SideBarItem>
                )
            }
        </Container>
    );
};

export default Sidebar;