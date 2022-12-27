import axios from "axios"

const channelVideosRequest = () => {
    return {
        type: "CHANNEL_VIDEOS_REQUEST"
    }
}

const channelVideosSuccess = channelVideos => {
    return {
        type: "CHANNEL_VIDEOS_SUCCESS",
        payload: channelVideos
    }
}

const channelVideosEreor = error => {
    return {
        type: "CHANNEL_VIDEOS_ERROR",
        payload: error
    }
}

const fetchChannelVideos = () => {

    const options = {
        params: {
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': 'f9f9ecc392msh91f6c728660d109p1721dfjsn4d81472f4b07',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(channelVideosRequest())
        axios.get(`https://youtube-v31.p.rapidapi.com/search` , options)

            .then(response => {
                const data = response.data
                dispatch(channelVideosSuccess(data))
            })
            
            .catch(error => {
                const errorMsg = error.message
                dispatch(channelVideosEreor(errorMsg))
            });
    }
}

export default fetchChannelVideos