import {MESSAGES_LOADING} from "../constants";

export default function messagesReducer(state=null, action = {}) {

  switch(action.type) {
    case `${MESSAGES_LOADING}_PENDING`:
      return state;

    case `${MESSAGES_LOADING}_FULFILLED`:
      return action.payload;

    case `${MESSAGES_LOADING}_REJECTED`:
      return action.payload;  

    default:
      return state;
  }
}