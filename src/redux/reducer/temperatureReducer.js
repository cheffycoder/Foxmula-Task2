const initialState = {
    temp: ''
}

const tempratureReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TEMPERATURE_SUCCESS':
            return {
                temp: action.payload,
            }
        default: return state
    }
}

export default tempratureReducer;