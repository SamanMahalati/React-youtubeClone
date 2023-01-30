import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
import styled from 'styled-components';

//components
import NewVideo from './NewVideo';
import Loading from "../shared/Loading"

//fetch Data
import fetchSearch from '../redux/search/searchAction';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
    `

const ChannelCard = styled.div`
    overflow: hidden;
    background-color: #262626;
    border-radius: 1rem;
    display: flex;
    width: 23rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
`


const SearchPage = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.searchState)

    useEffect(() => {
        dispatch(fetchSearch(param.id))
    }, [])

    return (
        <Container>
            <div>
                {
                    searchState.loading ?
                        <Loading />
                        :
                        <>
                            <ChannelCard>
                                <Link
                                    to={`/channel/${searchState?.search?.items?.[0]?.snippet?.channelId}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#fff" ,
                                        display: "flex" ,
                                        flexDirection: "column" ,
                                        gap: "2rem" ,
                                        justifyContent: "center" ,
                                        alignItems: "center" ,
                                        padding: "0 2rem" ,
                                        textAlign: "center" ,
                                        lineHeight: "2.3rem" ,
                                        cursor: "pointer"
                                    }}>

                                    <Avatar src={searchState?.search?.items?.[0]?.snippet?.thumbnails?.high?.url} sx={{ height: 150, width: 150 }} />
                                    <h1>{searchState?.search?.items?.[0]?.snippet?.title}</h1>

                                </Link>
                            </ChannelCard>
                            {
                                searchState?.search?.items?.slice(1)?.map(item => <NewVideo data={item} />)
                            }
                        </>
                }
            </div>
        </Container>
    );
};

export default SearchPage;