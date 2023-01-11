import React from 'react';
import { Avatar } from '@mui/material';

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

const CommentBox = ({ comments }) => {

    return (
        <Container>
            {
                <>
                    <Avatar alt="profile" src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                    <CommentContent>
                        <h3>{comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h3>
                        <h4>{comments?.snippet?.topLevelComment?.snippet?.textDisplay}</h4>
                    </CommentContent>
                </>
            }

        </Container>
    );
};

export default CommentBox;