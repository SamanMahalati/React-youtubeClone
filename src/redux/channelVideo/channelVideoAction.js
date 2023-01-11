import axios from "axios"

const channelVideoRequest = () => {
    return {
        type: "CHANNEL_VIDEO_REQUEST"
    }
}

const channelVideoSuccess = channelVideo => {
    return {
        type: "CHANNEL_VIDEO_SUCCESS",
        payload: channelVideo
    }
}

const channelVideoEreor = error => {
    return {
        type: "CHANNEL_VIDEO_ERROR",
        payload: error
    }
}

const fetchChannelVideo = (videoID) => {

    const options = {
        method: 'GET',
        params: { part: 'contentDetails,snippet,statistics', id: videoID },
        headers: {
            'X-RapidAPI-Key': '7aca16caa9msh8138c95a99fd0f5p1ce837jsn888f3e41793b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(channelVideoRequest())

        axios.get(`https://youtube-v31.p.rapidapi.com/videos` , options)

            .then(response => {
                const data = response.data
                dispatch(channelVideoSuccess(data))
            })

            .catch(error => {
                const errorMsg = error.message
                dispatch(channelVideoEreor(errorMsg))
            })
    }
}

export default fetchChannelVideo