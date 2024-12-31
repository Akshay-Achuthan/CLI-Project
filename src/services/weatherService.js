import axios from 'axios';
import { weatherApiKey } from '../config.js';

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity
    };
  } catch (error) {
    return {
      message: 'City not found or invalid input'
    };
  }
}
