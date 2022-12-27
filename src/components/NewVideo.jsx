import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    overflow: hidden;
    background-color: #262626;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `

const VideoTitle = styled.h3`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6rem;
    height: 5rem;
    `

const VidoeImageContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: 14rem;
    }
`

const VideoContentContainer = styled.div`
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `

const ChannelName = styled.h5`
    color: #D72323;
`

const NewVideo = ({ data }) => {
    return (
        <Card>
            {console.log(data.snippet)}
            <VidoeImageContainer>
                <img src={data.snippet.thumbnails.medium.url} alt="" />
            </VidoeImageContainer>
            <VideoContentContainer>
                <VideoTitle>{data.snippet.title}</VideoTitle>
                <ChannelName>{data.snippet.channelTitle}</ChannelName>
            </VideoContentContainer>
        </Card>
    );
};

export default NewVideo;