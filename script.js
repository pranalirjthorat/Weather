async function fetchWeatherData(cityname){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=3d5c90611259df63701e645199dd4d3a`;
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)

}

function fetchcity(){
	let cityname = document.getElementById("city_name");
	if(cityname.value===""){
		alert("Enter a city name");

	}else{
		fetchWeatherData(cityname.value);
		cityname.value="";

	}
}