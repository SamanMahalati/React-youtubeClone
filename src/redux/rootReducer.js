import { combineReducers } from "redux"

//Reducer
import channelVideosReducer from "./channelVideos/channelVideosReducer"
import channelVideoReducer from "./channelVideo/channelVideoReducer"
import channelDetailReducer from "./channelDetails/channelDetailsReducer"
import channelCommentsReducer from "./videoComments/videoCommentReducer"

const rootReducer = combineReducers({
    channelVideosState: channelVideosReducer ,
    channelVideoState: channelVideoReducer ,
    channelDetailState: channelDetailReducer ,
    videoCommentsState: channelCommentsReducer ,
})

export default rootReducer