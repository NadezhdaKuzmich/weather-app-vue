import axios from "axios";

const API_KEY = "6b583a380d53011129321fa3cf978a62";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = (city) => {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
};