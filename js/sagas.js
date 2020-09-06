import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUESTED, DATA_LOADED } from "./constants/action-types";

export default function* watcherSaga (){
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try{
    const payload = yield call(getData, action.payload);
    yield put({type: DATA_LOADED, payload});
  } catch (e){
    console.log(e);

    yield put({type: "API_ERROR", payload: e });

  }
}

function getData(url) {
 return fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})
 .then(response => response.json()).then((response => response));
}