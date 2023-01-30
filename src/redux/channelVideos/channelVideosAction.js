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

const fetchChannelVideos = (categories) => {

    const options = {
        method: 'GET',
        params: {
            channelId: categories,
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': '7aca16caa9msh8138c95a99fd0f5p1ce837jsn888f3e41793b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(channelVideosRequest())
        axios.get(`https://youtube-v31.p.rapidapi.com/search`, options)

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