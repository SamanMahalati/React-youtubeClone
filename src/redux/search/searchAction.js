import axios from "axios"

const searchRequest = () => {
    return {
        type: "SEARCH_REQUEST"
    }
}

const searchSuccess = Search => {
    return {
        type: "SEARCH_SUCCESS",
        payload: Search
    }
}

const searchError = error => {
    return {
        type: "SEARCH_ERROR",
        payload: error
    }
}

const fetchSearch = (search) => {

    const options = {
        method: 'GET',
        params: {
            q: search,
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        headers: {
            'X-RapidAPI-Key': 'f9f9ecc392msh91f6c728660d109p1721dfjsn4d81472f4b07',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    return (dispatch) => {
        dispatch(searchRequest())
        axios.get(`https://youtube-v31.p.rapidapi.com/search`, options)

            .then(response => {
                const data = response.data
                dispatch(searchSuccess(data))
            })

            .catch(error => {
                const errorMsg = error.message
                dispatch(searchError(errorMsg))
            });
    }
}

export default fetchSearch