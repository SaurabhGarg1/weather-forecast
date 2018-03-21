import React, { Component } from 'react';

class Weather extends Component {

	constructor(props){
		super(props)
	}

	componentWillMount() {
	this.props.loadWeatherData();
	}

	render() {
		return (
			<main class="container">
    			<div class="card-wrapper">
    			{this.props.weatherData ? this.props.weatherData.list.map((item)=> 
    				<section class="card anim-flip">
			            <header>
			                <h1 class="card-header">{item.dt_txt}</h1>
			            </header>
			            <p class="card-temp box-highlight">{item.main.temp}</p>
			            <div class="icon">
			                <div class="cloud-group">
			                    <span class="icon-cloud cloud-circle shadow-cloud-clip"></span>
			                    <span class="icon-cloud cloud-base shadow-cloud-clip"></span>
			                </div>
			            </div>
			            <p class="card-info">{item.weather[0].description}</p>
			        </section>
			    ): <p> Please wait.....!! </p>}
    			</div>
			</main>
		)
	}
}

export default Weather;
