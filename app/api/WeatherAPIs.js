import { getAPICall } from './ApiWrapper';
import config from '../../config';

export function getWeatherList(lat, long) {
  return new Promise(async (success, failure) => {
    const weatherCalls = [
      getAPICall(
        `?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
      // getAPICall(
      //   `?lat=43.6532&lon=-79.3832&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      // ),
    ];
    Promise.all(weatherCalls)
      .then((response) => {
        success(response);
      })
      .catch((errorResponse) => {
        failure(errorResponse);
      });
  });
}
