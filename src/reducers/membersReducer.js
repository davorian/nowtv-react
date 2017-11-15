import {MEMBERS_LOADING} from "../constants";

export default function membersReducer (state=[], action = {}) {

  switch(action.type) {
    case `${MEMBERS_LOADING}_PENDING`:
      return state;

    case `${MEMBERS_LOADING}_FULFILLED`:
      return action.payload;

    case `${MEMBERS_LOADING}_REJECTED`:
      return action.payload;

    default:
      return state;
  }
}