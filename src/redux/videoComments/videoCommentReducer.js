const initialState = {
    loading: false ,
    videoComments: [] ,
    error: ""
}

const videoCommentsReducer = (state = initialState , action) => {
    switch(action.type) {
        case "VIDEO_COMMENTS_REQUEST" : {
            return {
                loading: true
            }
        }
        case "VIDEO_COMMENTS_SUCCESS" : {
            return {
                loading: false ,
                videoComments: action.payload
            }
        }
        case "VIDEO_COMMENTS_ERROR" : {
            return {
                loading: false ,
                videoComments: [] ,
                error: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default videoCommentsReducer