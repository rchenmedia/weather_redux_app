import { FETCH_WEATHER } from "../actions/index"; //importing a constant variable, safer than using the string version of fetch_weather

//redux-promise unwraps the payload promise from actions,
//and dispatches new 'action' of same type with payload of resolved request

export default function(state = [], action) {  //store weather data as an array in 'state'
  switch (action.type) {                       // if action.type equals...
    case FETCH_WEATHER:                        // ..the case
      return [action.payload.data, ...state];  // goes in state array, and adds new data continuosly to old state data
  }
  return state;
}
