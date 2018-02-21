const initialState = {weatherData:''};

const WeatherReducer = (state=initialState,action) => {

switch(action.type) {

	case 'DATA_LOAD_SUCCESS' :
		return {...state, weatherData : action.payload};
	case 'DATA_LOAD_ERROR' :
		return {...state, weatherData : '', errorMsg : 'Data Not Found'};
	default :
		return state;
	}
}

export default WeatherReducer