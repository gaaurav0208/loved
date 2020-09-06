import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";
import forbiddenWordsMiddleware from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../IndicatorSagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(apiSaga);

export default store;
