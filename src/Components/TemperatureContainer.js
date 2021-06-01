import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchTemperatureSuccess } from '../redux/action/temperatureActions'

const TemperatureContainer = ({tempData, fetchTemperatureSuccess}) => {
    useEffect(() => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jammu&units=metric&appid=21a92015c9ba0960fb4e8b02522d51ee`)
       .then((response)=>fetchTemperatureSuccess(response.data.main.temp))
       .catch((err)=>console.log(err))
    })
    return <h1>{tempData.temp} Degree Celcius {tempData.name} </h1> 
}

const mapStateToProps = state => {
    return {
        tempData: state.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTemperatureSuccess: (temp) => dispatch(fetchTemperatureSuccess(temp))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TemperatureContainer)

