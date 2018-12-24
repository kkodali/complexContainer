import * as types from "../types/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { api_step } from "../apis/api_step";

function* setStep(action) {
  let step = yield api_step.setStepAsync(action.payload);
  if (step >= 0) {
    yield put({ type: types.UPDATE_STEP_SUCCESS, response: step });
  } else {
    console.log('step sequence failed!!')
  }
}

function* watchSetStep() {
  yield takeLatest(types.UPDATE_STEP, setStep);
}

export const stepSaga = [watchSetStep()];
