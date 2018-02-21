import {WeatherService} from '../Services/WeatherService'

export const loadWeatherData = () => {
  return (dispatch) => {

    WeatherService()
      .then(res => dispatch({ type: "DATA_LOAD_SUCCESS", payload: res }))
      .catch(err => dispatch({ type: "DATA_LOAD_ERROR", payload: err }));
  }
}