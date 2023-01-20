import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"

//MUI
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


//Fetch channel Data
import fetchChannelVideos from "../redux/channelVideos/channelVideosAction"
import fetchChannelDetails from "../redux/channelDetails/channelDetailsAction"

//Components
import NewVideo from './NewVideo';
import Loading from "../shared/Loading"
import { Avatar } from '@mui/material';
import styled from 'styled-components';

export default function LabTabs() {

    const param = useParams()

    const dispatch = useDispatch()
    const channelVideosState = useSelector(state => state.channelVideosState)
    const channelDetailsState = useSelector(state => state.channelDetailState)

    React.useEffect(() => {
        dispatch(fetchChannelVideos(param.id))
        dispatch(fetchChannelDetails(param.id))
    }, [])

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const Header = styled.div`
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 0 0 2rem 0;
        div {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }
        h1 {
            font-weight: 800;
            color: #fff;
            font-size: 30px;
        }
        h2 {
            font-weight: 600;
            color: #aaa;
            font-size: 19px;
        }
        `

    const Discription = styled.div`
        padding: 0 0 2rem 0;   
        h3 {
            line-height: 2.5rem;
            color: #f5f5f5;
            padding: 1rem 0;
            font-weight: 400;
            text-align: justify;
        }
    `

    const Details = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        padding: 1.5rem 0;

        h3 {
            color: #f5f5f5;
            font-weight: 400;
            padding: 0.5rem 0;
        }
    `

    const Title = styled.h1`
        color: #fff;
        font-size: 24px;
        font-weight: 800;
        padding: 2rem 0 0 0;
    `

    const Line = styled.hr`
        height: 0.1rem ;
        width: 100%;
        background-color: #fff;
    `
    return (
        <Box sx={{ width: '100%', typography: 'body3', padding: "0 15rem" }} >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered scrollButtons="auto" sx={{ display: "flex", gap: "2rem"}}>
                        <Tab label="Videos" value="1" sx={{ color: "#fff", padding: "1.5rem"}} />
                        <Tab label="About" value="2" sx={{ color: "#fff", padding: "1.5rem"}} />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    {
                        channelVideosState.loading ?
                            <Loading />
                            :
                            channelVideosState?.channelVideos?.items?.map(item => <NewVideo data={item} />)
                    }
                </TabPanel>
                <TabPanel value="2">
                    {
                        channelDetailsState.loading ?
                            <Loading />
                            :
                            <>
                                <Header>
                                    <Avatar sx={{ width: 120, height: 120 }} src={channelDetailsState?.channelDetail?.items?.[0]?.snippet?.thumbnails?.high?.url} />
                                    <div>
                                        <h1>{channelDetailsState?.channelDetail?.items?.[0]?.brandingSettings?.channel?.title}</h1>
                                        <h2>{channelDetailsState?.channelDetail?.items?.[0]?.snippet?.customUrl}</h2>
                                        <h2>
                                            <span style={{padding: "0 10px"}}>Subscriber</span>
                                            {
                                                new Intl.NumberFormat().format(channelDetailsState?.channelDetail?.items?.[0]?.statistics?.subscriberCount)
                                            }
                                        </h2>
                                    </div>
                                </Header>

                                <Line></Line>

                                <Title>Description</Title>
                                <Discription>
                                    <h3>{channelDetailsState?.channelDetail?.items?.[0]?.brandingSettings?.channel?.description}</h3>
                                </Discription>

                                <Line></Line>

                                <Title>Details</Title>
                                <Details>
                                    <h3>Location :  {channelDetailsState?.channelDetail?.items?.[0]?.brandingSettings?.channel?.country}</h3>

                                    <h3>video Count :  {
                                        new Intl.NumberFormat().format(channelDetailsState?.channelDetail?.items?.[0]?.statistics?.videoCount)
                                    }
                                    </h3>

                                    <h3>view Count : {
                                        new Intl.NumberFormat().format(channelDetailsState?.channelDetail?.items?.[0]?.statistics?.viewCount)
                                    }
                                    </h3>
                                    <h3>
                                        published At :
                                        {
                                            channelDetailsState?.channelDetail?.items?.[0]?.snippet?.publishedAt.split("-")[0]
                                        }
                                        /
                                        {channelDetailsState?.channelDetail?.items?.[0]?.snippet?.publishedAt.split("-")[1]}
                                        /
                                        {channelDetailsState?.channelDetail?.items?.[0]?.snippet?.publishedAt.split("-")[2][0]}
                                        {channelDetailsState?.channelDetail?.items?.[0]?.snippet?.publishedAt.split("-")[2][1]}
                                    </h3>
                                </Details>
                            </>
                    }
                </TabPanel>
            </TabContext>
        </Box>
    );
}