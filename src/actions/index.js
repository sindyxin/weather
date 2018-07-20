import axios from 'axios';
const API_KEY = 'a8f67b3d7682e48aacb5907c0a6b5a7f';
//const URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_LEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // return a promise called request

  console.log('Request', request);
  return {
    type: FETCH_WEATHER,
    payload: request

  };
}