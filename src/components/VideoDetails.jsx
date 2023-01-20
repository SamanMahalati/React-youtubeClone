import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Avatar, Skeleton } from '@mui/material';

//Components
import CommentBox from './CommentBox';

import { useSelector, useDispatch } from "react-redux"

import fetchChannelVideo from '../redux/channelVideo/channelVideoAction'; //Fetch video data
import fetchVideoComments from '../redux/videoComments/videoCommentAction'; //Fetch comment data

//React Player
import ReactPlayer from "react-player"

//icons
import { CheckIcon, LikeIcon, ViweIcon, CommentIcon } from '../utils/constants';
import Loading from '../shared/Loading';


//Styles
const Container = styled.section`
    width: 100%;
    background-color: #404040;
    padding: 2rem 0;
`
const PlayerContainer = styled.div`
    padding: 2rem 4rem;
    
    div > iframe {
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

const ChannelBox = styled.div`
    background-color: #262626;
    color: #fff ;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const VideoContent = styled.div`
    padding: 0.5rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const ChannelNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    svg {
        color: red;
    }
`
const VideoView = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
`
const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #CA3E47;
    color: #fff;
    padding: 10px 15px;
    border-radius: 2rem;
`
const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #CA3E47;
    color: #fff;
    padding: 10px 15px;
    border-radius: 2rem;
`
const VideoTitle = styled.h1`
    font-weight: 900;
    padding: 1rem 0;
`

const ChannelTitle = styled.h4`
    font-weight: 700;
`
const DiscriptionContainer = styled.div`
    background-color: #262626;
    color: #fff ;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Discription = styled.h5`
    font-size: 18px;
    line-height: 2.4rem;
    padding: 2rem 0;
`

const CommentTitle = styled.h1`
    color: #fff;
    font-size: 30px;
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #262626;
    padding: 1rem;
    border-radius: 1rem;
`

const CommentTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
        color: #CA3E47;
    }
`

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const VideoDetails = () => {
    const param = useParams()
    const videoState = useSelector(state => state.channelVideoState)
    const commentState = useSelector(state => state.videoCommentsState)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchChannelVideo(param.id))
        dispatch(fetchVideoComments(param.id))
    }, [])

    return (
        <Container>
            {
                videoState.error ?
                    navigate('/error')
                    :
                    <>
                        <PlayerContainer>
                            {
                                videoState.loading ?
                                    <Skeleton variant="rounded" width={"100%"} height={"90vh"} sx={{ padding: "1rem 4rem", margin: "0 auto", bgcolor: "gray.100" }} animation="wave" />
                                    :
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${param.id}`}
                                        controls
                                        height={"90vh"}
                                        width={"100%"}
                                        style={{ backgroundColor: "#262626" }}
                                    />
                            }
                        </PlayerContainer>
                        <VideoContent>
                            <ChannelBox>
                                {
                                    videoState.loading ?
                                        <Skeleton variant="rounded" width={300} height={25} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                        :
                                        <VideoTitle>{videoState.channelVideo?.items?.[0]?.snippet?.title}</VideoTitle>
                                }
                                <ChannelNameContainer>
                                    <Link to={`/channel/${videoState.channelVideo?.items?.[0]?.snippet?.channelId}`}>
                                    {
                                        videoState.loading ?
                                        <>
                                                <Skeleton variant="circular" sx={{ bgcolor: "grey.800" }} animation="wave">
                                                    <Avatar />
                                                </Skeleton>
                                                <br />
                                                <Skeleton animation="wave" variant="rectangular" width={250} height={12} sx={{ bgcolor: "grey.800" }} />
                                            </>
                                            :
                                            <>
                                                <CheckIcon />
                                                <ChannelTitle>{videoState.channelVideo?.items?.[0]?.snippet?.channelTitle}</ChannelTitle>
                                            </>
                                    }
                                    </Link>
                                </ChannelNameContainer>
                                <VideoView>
                                    {
                                        videoState.loading ?
                                            <Skeleton variant="rounded" width={90} height={40} sx={{ bgcolor: "grey.800", borderRadius: "3rem" }} animation="wave" />
                                            :
                                            <ViewContainer>
                                                <ViweIcon />
                                                <h3>{videoState.channelVideo?.items?.[0]?.statistics?.viewCount}</h3>
                                            </ViewContainer>
                                    }


                                    {
                                        videoState.loading ?
                                            <Skeleton variant="rounded" width={90} height={40} sx={{ bgcolor: "grey.800", borderRadius: "3rem" }} animation="wave" />
                                            :
                                            <LikeContainer>
                                                <h3>{videoState.channelVideo?.items?.[0]?.statistics?.likeCount}</h3>
                                                <LikeIcon />
                                            </LikeContainer>
                                    }



                                </VideoView>
                            </ChannelBox>

                            <DiscriptionContainer>
                                {
                                    videoState.loading ?
                                        <>
                                            <Skeleton variant="rounded" width={200} height={25} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                            <br />
                                            <Skeleton variant="rounded" width={"100%"} height={140} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                        </>
                                        :
                                        <>
                                            <h1>Discription:</h1>
                                            <Discription>{videoState.channelVideo?.items?.[0]?.snippet?.description}</Discription>
                                        </>
                                }

                            </DiscriptionContainer>

                            <CommentContainer>
                                <CommentTitleContainer>
                                    {
                                        videoState.loading ?
                                            <>
                                                <Skeleton variant="rounded" width={200} height={30} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                            </>
                                            :
                                            <>
                                                <CommentIcon />
                                                <CommentTitle>{commentState.videoComments?.items?.length} Comments</CommentTitle>
                                            </>
                                    }
                                </CommentTitleContainer>
                                <Comment>
                                    {
                                        commentState.loading ?
                                            <>
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                                <Skeleton variant="rounded" width={"100%"} height={80} sx={{ bgcolor: "grey.800" }} animation="wave" />
                                            </>
                                            :
                                            commentState.error ?
                                                <h1>{commentState.error}</h1> :

                                                commentState.videoComments?.items?.map(comment =>
                                                    <CommentBox
                                                        key={comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}
                                                        comments={comment}
                                                    />)
                                    }
                                </Comment>
                            </CommentContainer>


                        </VideoContent>
                    </>
            }
        </Container>
    );
};

export default VideoDetails;