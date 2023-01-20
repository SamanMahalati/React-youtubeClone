const initialState = {
    loading: false ,
    search: [] ,
    error: ""
}

const searchReducer = (state = initialState , action) => {
    switch(action.type) {
        case "SEARCH_REQUEST" : {
            return {
                loading: true
            }
        }
        case "SEARCH_SUCCESS" : {
            return {
                loading: false ,
                search: action.payload
            }
        }
        case "SEARCH_ERROR" : {
            return {
                loading: false ,
                search: [] ,
                error: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default searchReducer