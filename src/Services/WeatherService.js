export const WeatherService = () => {
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	const uri = 'http://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=aaf48b4a3e68f8c171d7686d9e21701e';
	return fetch(proxyurl+uri)
			.then(res => res.json());
}