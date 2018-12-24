<<<<<<< HEAD
import {all} from   'redux-saga/effects'
import * as stepSaga from './sagaStep'

export default function *rootSaga() {
    const sagas = {
        ...stepSaga
    }
    yield all(sagas);
=======
import {all} from   'redux-saga/effects'
import * as stepSaga from './sagaStep'

export default function *rootSaga() {
    const sagas = {
        ...stepSaga
    }
    yield all(sagas);
>>>>>>> ac9b403bd212644d3a86ebbf35eff29c408d9e87
}