import * as types from "../types/actionTypes";
import initialState from "../store/initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_STEP_SUCCESS:
      return Object.assign({}, state, {
        step: action.response
      });

      case types.INITIALIZE_USER_STATE: 
      return initialState;
    default:
      return state;
  }
}
