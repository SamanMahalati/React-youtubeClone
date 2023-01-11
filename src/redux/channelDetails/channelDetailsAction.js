import axios from "axios"

const channelDetailRequest = () => {
    return {
        type: "CHANNEL_DETAIL_REQUEST"
    }
}

const channelDetailSuccess = channelDetail => {
    return {
        type: "CHANNEL_DETAIL_SUCCESS",
        payload: channelDetail
    }
}

const channelDetailEreor = error => {
    return {
        type: "CHANNEL_DETAIL_ERROR",
        payload: error
    }
}

const fetchChannelDetails = (ChannelID) => {

    const options = {
        method: 'GET',
        params: { part: 'contentDetails,snippet,statistics', id: ChannelID },
        headers: {
            'X-RapidAPI-Key': '7aca16caa9msh8138c95a99fd0f5p1ce837jsn888f3e41793b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(channelDetailRequest())

        axios.get(`https://youtube-v31.p.rapidapi.com/channels` , options)

            .then(response => {
                const data = response.data
                dispatch(channelDetailSuccess(data))
            })

            .catch(error => {
                const errorMsg = error.message
                dispatch(channelDetailEreor(errorMsg))
            })
    }
}

export default fetchChannelDetails