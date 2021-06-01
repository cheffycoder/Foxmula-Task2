import {
    FETCH_TEMPERATURE_SUCCESS
} from '../temperatureTypes'



export const fetchTemperatureSuccess = temp => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temp
    }
}


