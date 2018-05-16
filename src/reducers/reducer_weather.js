import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
  console.log('Action received', action);
  switch (action.type){
    case FETCH_WEATHER:
      
      return state.concat([action.payload.data]);//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
      //equal to return [action.payload.data, ...state]; 
  }
  return state;

}