const initialState = {
    loading: false ,
    channelDetail: [] ,
    error: ""
}

const channelDetailReducer = (state = initialState , action) => {
    switch(action.type) {
        case "CHANNEL_DETAIL_REQUEST" : {
            return {
                loading: true
            }
        }
        case "CHANNEL_DETAIL_SUCCESS" : {
            return {
                loading: false ,
                channelDetail: action.payload
            }
        }
        case "CHANNEL_DETAIL_ERROR" : {
            return {
                loading: false ,
                channelDetail: [] ,
                error: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default channelDetailReducer