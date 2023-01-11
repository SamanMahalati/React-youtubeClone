import axios from "axios"

const videoCommentsRequest = () => {
    return {
        type: "VIDEO_COMMENTS_REQUEST"
    }
}

const videoCommentsSuccess = videoComments => {
    return {
        type: "VIDEO_COMMENTS_SUCCESS",
        payload: videoComments
    }
}

const videoCommentsEreor = error => {
    return {
        type: "VIDEO_COMMENTS_ERROR",
        payload: error
    }
}

const fetchVideoComments = (VideoID) => {

    const options = {
        method: 'GET',
        params: { part: 'snippet', videoId: VideoID, maxResults: '100' },
        headers: {
            'X-RapidAPI-Key': '7aca16caa9msh8138c95a99fd0f5p1ce837jsn888f3e41793b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(videoCommentsRequest())

        axios.get(`https://youtube-v31.p.rapidapi.com/commentThreads`, options)

            .then(response => {
                const data = response.data
                dispatch(videoCommentsSuccess(data))
            })

            .catch(error => {
                const errorMsg = error.message
                dispatch(videoCommentsEreor(errorMsg))
            })
    }
}

export default fetchVideoComments