const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a2e059ad82mshe7ef99efdbad355p1ce763jsn767edad6fb34",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};
const getWeather=(city)=>{
   const cityName= document.getElementById("cityName");
   cityName.innerHTML =city;
fetch(
  `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if (document.getElementById("last_updated_epoch")) last_updated_epoch.innerHTML = response.location.localtime_epoch;
    if (document.getElementById("last_updated")) last_updated.innerHTML = response.current.last_updated;
    if (document.getElementById("temp_c")) temp_c.innerHTML = response.current.temp_c;
    if (document.getElementById("temp2_c")) temp2_c.innerHTML = response.current.temp_c;
    if (document.getElementById("temp_f")) temp_f.innerHTML = response.current.temp_f;
    if (document.getElementById("is_day")) is_day.innerHTML = response.current.is_day;
    if (document.getElementById("wind_mph")) wind_mph.innerHTML = response.current.wind_mph;
    if (document.getElementById("wind_kph")) wind_kph.innerHTML = response.current.wind_kph;
    if (document.getElementById("wind2_kph")) wind2_kph.innerHTML = response.current.wind_kph;
    if (document.getElementById("wind_degree")) wind_degree.innerHTML = response.current.wind_degree;
    if (document.getElementById("wind_dir")) wind_dir.innerHTML = response.current.wind_dir;
    if (document.getElementById("pressure_mb")) pressure_mb.innerHTML = response.current.pressure_mb;
    if (document.getElementById("pressure_in")) pressure_in.innerHTML = response.current.pressure_in;
    if (document.getElementById("precip_mm")) precip_mm.innerHTML = response.current.precip_mm;
    if (document.getElementById("precip_in")) precip_in.innerHTML = response.current.precip_in;
    if (document.getElementById("humidity")) humidity.innerHTML = response.current.humidity;
    if (document.getElementById("cloud")) cloud.innerHTML = response.current.cloud;
    if (document.getElementById("cloud2")) cloud2.innerHTML = response.current.cloud;
    if (document.getElementById("feelslike_c")) feelslike_c.innerHTML = response.current.feelslike_c;
    if (document.getElementById("feelslike_f")) feelslike_f.innerHTML = response.current.feelslike_f;
    if (document.getElementById("windchill_c")) windchill_c.innerHTML = response.current.windchill_c;
    if (document.getElementById("windchill_f")) windchill_f.innerHTML = response.current.windchill_f;
    if (document.getElementById("heatindex_c")) heatindex_c.innerHTML = response.current.heatindex_c;
    if (document.getElementById("heatindex_f")) heatindex_f.innerHTML = response.current.heatindex_f;
    if (document.getElementById("dewpoint_c")) dewpoint_c.innerHTML = response.current.dewpoint_c;
    if (document.getElementById("dewpoint_f")) dewpoint_f.innerHTML = response.current.dewpoint_f;
    if (document.getElementById("vis_km")) vis_km.innerHTML = response.current.vis_km;
    if (document.getElementById("vis_miles")) vis_miles.innerHTML = response.current.vis_miles;
    if (document.getElementById("uv")) uv.innerHTML = response.current.uv;
    if (document.getElementById("gust_mph")) gust_mph.innerHTML = response.current.gust_mph;
    if (document.getElementById("gust_kph")) gust_kph.innerHTML = response.current.gust_kph;
  })
  .catch((err) => console.error(err));
};
const submitButton = document.getElementById("submitButton");
if (submitButton) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });
}
