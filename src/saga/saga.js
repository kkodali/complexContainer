import {all} from   'redux-saga/effects'
import * as stepSaga from './sagaStep'

export default function *rootSaga() {
    const sagas = {
        ...stepSaga
    }
    yield all(sagas);
}