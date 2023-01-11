import React from 'react';
import { Skeleton } from '@mui/material';

//Styles
import styled from 'styled-components';

//React Router Dom
import { Link } from 'react-router-dom';

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
    width: 100%;
    `

const ChannelName = styled.h5`
    color: #D72323;
`

const NewVideo = ({ data }) => {
    return (
        <Link to={`/video/${data.id.videoId}`} style={{ color: "#fff", textDecoration: "none" }}>
            <Card>
                <VidoeImageContainer>
                    {
                        data.snippet.thumbnails.medium.url ?
                            <img src={data.snippet.thumbnails.medium.url} alt="video" loading='lazy'/>
                            :
                            <>
                                <Skeleton variant="rounded" width={"100%"} height={"13rem"} sx={{ padding: "1rem 4rem", margin: "0 auto", bgcolor: "gray.300" }} animation="wave" />
                                <br />
                            </>
                    }
                </VidoeImageContainer>
                <VideoContentContainer>
                    {
                        data.snippet.title ?
                            <VideoTitle>{data.snippet.title}</VideoTitle>
                            :
                            <Skeleton variant="rounded" width={"80%"} height={10} sx={{bgcolor: "gray.300", borderRadius: "3rem" }} animation="wave" />
                    }
                    {
                        data.snippet.channelTitle ?
                            <ChannelName>{data.snippet.channelTitle}</ChannelName>
                            :
                            <Skeleton variant="rounded" width={"30%"} height={10} sx={{ bgcolor: "gray.300", borderRadius: "3rem" }} animation="wave" />
                    }
                </VideoContentContainer>
            </Card>
        </Link>
    );
};

export default NewVideo;