import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//fetch channel videos data
import fetchChannelVideos from '../redux/channelVideos/channelVideosAction';

//Components
import NewVideo from './NewVideo';
import Error from "../shared/ErrorPage"
import { Stack } from '@mui/material';
import Loading from "../shared/Loading"



const NewVideos = () => {
    const dispatch = useDispatch()
    const channelVideosState = useSelector(state => state.channelVideosState)

    useEffect(() => {
        dispatch(fetchChannelVideos())
    }, [])

    return (
        channelVideosState.error ?
            <Error />
            :
            channelVideosState.loading ?
                <Loading />
                :
                <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="2rem" padding="4rem 0">
                    {
                        channelVideosState?.channelVideos?.items?.map(video => <NewVideo key={video?.id?.videoId ? video?.id?.videoId : null} data={video} />)
                    }
                </Stack>
    );
};

export default NewVideos;