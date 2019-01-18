import actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
}