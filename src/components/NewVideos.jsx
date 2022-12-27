import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components"

//fetch channel videos data
import fetchChannelVideos from '../redux/channelVideos/channelVideosAction';
import Loading from '../shared/Loading';

//Components
import NewVideo from './NewVideo';

//Styles
const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    overflow-y: scroll;
    padding: 2rem;
    background-color: #404040;
    gap: 1rem;
    flex-grow: 1;
`


const NewVideos = () => {
    const dispatch = useDispatch()
    const channelVideosState = useSelector(state => state.channelVideosState)

    useEffect(() => {
        dispatch(fetchChannelVideos())
    }, [])

    return (
        <Container>
            {
                channelVideosState.loading ?
                    <Loading/> :
                    channelVideosState.channelVideos.items ?
                    channelVideosState.channelVideos.items.map(video => <NewVideo key={video.id.videoId ? video.id.videoId : null} data={video} />) : null
            }
        </Container>
    );
};

export default NewVideos;