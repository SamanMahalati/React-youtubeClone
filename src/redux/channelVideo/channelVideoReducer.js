const initialState = {
    loading: false ,
    channelVideo: [] ,
    error: ""
}

const channelVideoReducer = (state = initialState , action) => {
    switch(action.type) {
        case "CHANNEL_VIDEO_REQUEST" : {
            return {
                loading: true
            }
        }
        case "CHANNEL_VIDEO_SUCCESS" : {
            return {
                loading: false ,
                channelVideo: action.payload
            }
        }
        case "CHANNEL_VIDEO_ERROR" : {
            return {
                loading: false ,
                channelVideo: [] ,
                error: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default channelVideoReducer