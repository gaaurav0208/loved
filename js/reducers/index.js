import { ADD_ARTICLE, REMOVE_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteIndicators: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }else if (action.type === REMOVE_ARTICLE) {
    const articles = [...state.articles];
    articles.splice(action.payload, 1);
    return Object.assign({}, state, {
      articles
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteIndicators: state.remoteIndicators.concat(action.payload)
    })
  }
   return state;
};

export default rootReducer;