import React from 'react';
import styled from "styled-components"

//images
import { UserImg } from '../utils/constants';

// Icons
import { CameraIcon, MessageIcon, NotificationsIcon } from "../utils/constants"

//Components
import SearchBox from '../shared/SearchBox';
import { Avatar } from '@mui/material';

//Styles
const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LiveBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 3.5rem;
    width: 10rem;
    padding: 1rem;
    border-radius: 3rem;
    color: #fff;
    background-color: #1f1e24;
    cursor: pointer;
    h4 {
        font-weight: 400;
    }
`
const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
`
const NotificationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #504f56;
    svg {
        cursor: pointer;
    }
`
const AvatarBox = styled.div`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='93' ry='93' stroke='%23FFC831FF' stroke-width='3' stroke-dasharray='8 %2c 10' stroke-dashoffset='28' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 100px;
    padding: 0.5rem;
`



const Navbar = () => {
    return (
        <Container>
            <SearchBox />
            <ProfileBox>
                <LiveBox>
                    <CameraIcon sx={{ color: "#ffc831" , fontSize: 32 }} />
                    <h4>Start Live</h4>
                </LiveBox>
                <NotificationBox>
                    <MessageIcon  sx={{ fontSize: 30 }} />
                    <NotificationsIcon  sx={{ fontSize: 30 }} />
                </NotificationBox>
                <AvatarBox>
                    <Avatar src={UserImg} sx={{ height: 65, width: 65 }} />
                </AvatarBox>
            </ProfileBox>
        </Container>
    );
};

export default Navbar;