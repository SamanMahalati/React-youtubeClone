const initialState = {
    loading: false ,
    channelVideos: [] ,
    error: ""
}

const channelVideosReducer = (state = initialState , action) => {
    switch(action.type) {
        case "CHANNEL_VIDEOS_REQUEST" : {
            return {
                loading: true
            }
        }
        case "CHANNEL_VIDEOS_SUCCESS" : {
            return {
                loading: false ,
                channelVideos: action.payload
            }
        }
        case "CHANNEL_VIDEOS_ERROR" : {
            return {
                loading: false ,
                channelVideos: [] ,
                error: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default channelVideosReducer