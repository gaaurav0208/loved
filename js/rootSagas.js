import { takeEvery, takeLatest } from "redux-saga/effects";
import { DATA_REQUESTED, USERS_DATA_REQUESTED } from "./constants/action-types";
import indicatorSaga from './IndicatorSagas';
import usersSaga from './UsersSagas';

export default function* rootSagas (){
  yield takeEvery(DATA_REQUESTED, indicatorSaga);
  yield takeEvery(USERS_DATA_REQUESTED, usersSaga);
}