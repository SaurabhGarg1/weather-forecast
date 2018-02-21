import Weather from '../Component/Weather'
import {loadWeatherData} from '../ActionCreator/Weather'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWeatherData : () => loadWeatherData()
  },dispatch);
}

const mapStateToProps = (state) => {
	return {
		weatherData : state.weatherData
	}
}

const WeatherContainer = connect(mapStateToProps,mapDispatchToProps)(Weather);

export default WeatherContainer

