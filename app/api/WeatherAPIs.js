import { getAPICall } from './ApiWrapper';
import config from '../../config.json';

export function getWeatherList(lat, long) {
  return new Promise(async (success, failure) => {
    const weatherCalls = [
      getAPICall(
        `?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=43.432029714267394&lon=-103.48044937785359&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=47.15390895509833&lon=-110.2194797929828&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=47.571007860261034&lon=-122.29011856934967&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=47.6618736264824&lon=-117.40672126632536&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=48.69639430496941&lon=-116.31329606944004&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=48.51360573148258&lon=-111.85812021548728&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=48.90725729439538&lon=-111.25914813216161&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=48.81160742659252&lon=-97.79874779427318&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
      getAPICall(
        `?lat=48.94361437661584&lon=-100.51625114438382&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      ),
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
