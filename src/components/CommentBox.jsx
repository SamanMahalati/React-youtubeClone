import React, { useState } from 'react';
import { Avatar } from '@mui/material';

//Icon
import { ThumbGoodIcon, ThumbBadIcon } from '../utils/constants';

//Style
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    gap: 1rem;
    background-color: #262626;
    color: #fff ;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
        font-weight: 600;
    }
    h4 {
        line-height: 2.2rem;
        font-weight: 400;
    }
`

const CommentLike = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1rem 0 0 0;
`

const CommentBox = ({ comments }) => {

    const [like, setLike] = useState(comments?.snippet?.topLevelComment?.snippet?.likeCount)
    const [isLike, setIsLike] = useState(false)
    

    const UnlikeComment = () => {
        if (!isLike) {
            return like
        } else {
            setLike(() => like - 1)
            setIsLike(false)
        }
    }

    const LikeComment = () => {
        if (isLike) {
            return like
        } else {
            setLike(() => like + 1)
            setIsLike(true)
        }
    }

    return (
        <Container>
            {
                <>
                    <Avatar alt="profile" src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                    <CommentContent>
                        <h3>{comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h3>
                        <h4>{comments?.snippet?.topLevelComment?.snippet?.textDisplay}</h4>
                        <CommentLike>
                            <ThumbBadIcon onClick={UnlikeComment} style={{ cursor: "pointer" }} />
                            <span>{like}</span>
                            <ThumbGoodIcon onClick={LikeComment} style={{ cursor: "pointer" }} />
                        </CommentLike>
                    </CommentContent>
                </>
            }

        </Container>
    );
};

export default CommentBox;