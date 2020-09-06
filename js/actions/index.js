import { ADD_ARTICLE, REMOVE_ARTICLE, DATA_REQUESTED, USERS_DATA_REQUESTED } from "../constants/action-types";

export function addArticle(payload) {
  return {type: ADD_ARTICLE, payload}
};

export function removeArticle(payload) {
  return {type: REMOVE_ARTICLE, payload}
};

// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({type: "DATA_LOADED", payload: json});
//       });
//   }
// }

export function getDataUsingSaga(url) {
  return {type: DATA_REQUESTED, payload: url}
}

export function getUsersDataUsingSaga(url) {
  return {type: USERS_DATA_REQUESTED, payload: url}
}