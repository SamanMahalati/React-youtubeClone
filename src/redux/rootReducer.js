import { combineReducers } from "redux"

//Reducer
import channelVideosReducer from "./channelVideos/channelVideosReducer"
import channelVideoReducer from "./channelVideo/channelVideoReducer"
import channelDetailReducer from "./channelDetails/channelDetailsReducer"
import channelCommentsReducer from "./videoComments/videoCommentReducer"
import searchReducer from "./search/searchReducer"

const rootReducer = combineReducers({
    channelVideosState: channelVideosReducer ,
    channelVideoState: channelVideoReducer ,
    channelDetailState: channelDetailReducer ,
    videoCommentsState: channelCommentsReducer ,
    searchState: searchReducer
})

export default rootReducer