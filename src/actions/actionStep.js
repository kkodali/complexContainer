<<<<<<< HEAD
import * as types from "../types/actionTypes";

export function setStep(payload) {
  return { type: types.UPDATE_STEP, payload: payload };
}
export function initializeState(request) {
  return { type: types.INITIALIZE_USER_STATE, payload: request };
}
=======
import * as types from "../types/actionTypes";

export function setStep(payload) {
  return { type: types.UPDATE_STEP, payload: payload };
}
export function initializeState(request) {
  return { type: types.INITIALIZE_USER_STATE, payload: request };
}
>>>>>>> ac9b403bd212644d3a86ebbf35eff29c408d9e87
