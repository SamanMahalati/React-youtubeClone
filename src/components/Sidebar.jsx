import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { Categories } from '../utils/constants';

//icons
import { Menu } from "../utils/constants"


//images
import { Logo } from '../utils/constants';

//Fetch Data
import fetchChannelVideos from '../redux/channelVideos/channelVideosAction';

//Styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 14rem;
    max-width: 30rem;
    background-color: #1a1a23;
    gap: 1rem;
    padding: 2rem 0rem 0 0rem;
    gap: 2.5rem;
    `

const SideBarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
    height: 4.2rem;
    padding: 0rem 0rem 0rem 2rem;
    &:hover {
        background-color: #211e2d;
        transition: 0.3s;
        div {
            color: #ffc830;
        }
    }
    `

const SideBarIcon = styled.div`
    color: #504f56;
    `

const SideBarName = styled.span`
    color: #6f6c7c;
    font-weight: 400;
    `


const LogoContainer = styled.div`
    padding: 0rem 0rem 0rem 2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    img {
        height: 2.5rem;
    }
    svg {
        color: #3f3e46 ;
    }
    `
const CategoriesBox = styled.div`
    display: flex;
    flex-direction: column;
    `

const Line = styled.div`
    height: 2.5rem ;
    width: 0.1rem ;
    background-color: #3f3e46;
    margin: 0 0 0 10px ;
    `

const Sidebar = () => {

    const dispatch = useDispatch()
    const channelVideoState = useSelector(state => state.channelVideosState)


    const [categorieName, setCategorieName] = useState("music")

    useEffect(() => {
        dispatch(fetchChannelVideos(categorieName))
    }, [categorieName])



    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt="Logo" />
                <Line />
                <Menu />
            </LogoContainer>
            <CategoriesBox>
                {
                    Categories.map(Categorie =>
                        <SideBarItem onClick={() => setCategorieName(Categorie.name)} key={Categorie.name}>
                            <SideBarIcon>{Categorie.icon}</SideBarIcon>
                            <SideBarName>{Categorie.name}</SideBarName>
                        </SideBarItem>
                    )
                }
            </CategoriesBox>
        </Container>
    );
};

export default Sidebar;