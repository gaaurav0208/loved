import { takeEvery } from "redux-saga/effects";
import { DATA_REQUESTED, USER_DATA_REQUESTED } from "./constants/action-types";
import indicatorSaga from './IndicatorSagas';
import usersSaga from './UsersSagas';

export default function* rootSagas (){
  yield takeEvery(DATA_REQUESTED, indicatorSaga);
  yield takeEvery(USER_DATA_REQUESTED, usersSaga);
}