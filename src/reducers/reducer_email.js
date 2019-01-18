import actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.SEND_MAIL_RESULT:
      return [action.payload, ...state];
    default:
      return state;
  }
}