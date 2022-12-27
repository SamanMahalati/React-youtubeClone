import { combineReducers } from "redux"

//Reducer
import channelVideosReducer from "./channelVideos/channelVideosReducer"

const rootReducer = combineReducers({
    channelVideosState: channelVideosReducer
})

export default rootReducer