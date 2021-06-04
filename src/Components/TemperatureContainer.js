import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchTemperatureSuccess } from '../redux/action/temperatureActions'

const TemperatureContainer = ({tempData, fetchTemperatureSuccess}) => {

    const [city,setCity] = useState("");
    function clickHandler(event){
        setCity(event.target.value);
    }

    const handleSubmit = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=21a92015c9ba0960fb4e8b02522d51ee`)
        
        .then((response)=>{
            fetchTemperatureSuccess(response.data.main.temp+" Degree Celcius")
        })
        .catch((err)=>fetchTemperatureSuccess("City not found"))
    }

    return (

        <div>
            <div className="input-area">
                <input id="userInput" type="text" placeholder="Enter city name" value={city} onChange = { (event) => clickHandler(event)}></input>
                <button className="button-container" onClick = { handleSubmit } >Search</button>
            </div>
            <h1>{tempData.temp}{tempData.name} </h1> 
        </div>

    )
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

