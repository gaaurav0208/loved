import { call, put } from "redux-saga/effects";
import { USERS_DATA_LOADED } from "./constants/action-types";

export function* usersSaga(action) {
  try{
    const payload = yield call(getData, action.payload);
    yield put({type: USERS_DATA_LOADED, payload});
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
 .then(response => response.json()).then((response => response.indicators));
}