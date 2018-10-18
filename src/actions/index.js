import axios from "axios";   //ajax request library

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";  //extracting variable to a constant, keep action types consistent

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //request here is a promise

  return {                        //returning action, always need a type
    type: FETCH_WEATHER,
    payload: request              //redux-promise middleware sees a promise being returned, and stops the action.
                                  //then its resolves the promise and send the unwrapped data with the same type to the reducer.
  };
}
