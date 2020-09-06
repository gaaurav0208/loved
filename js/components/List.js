import React from "react";
import { connect } from "react-redux";
import { REMOVE_ARTICLE } from "../constants/action-types";
import { removeArticle } from "../actions/index";

const mapsStateToProps = (state) => {
  return {
    articles: state.articles
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeArticle: (index) => {
      dispatch(removeArticle(index))
    }
  }
};


const ConnectedList = (props) => {
  const removeItem = (index) => {
    props.removeArticle(index);
    alert('Removing item at index:', index);
  };

  return (<ul>
    {
    props.articles.length > 0 && props.articles.map((item, i) => 
      <li>{item.title} at INDEX: {i} <span><button onClick = {() => { removeItem(i)}}>Remove</button></span></li>
  )}
  </ul>);
};

const List = connect(mapsStateToProps, mapDispatchToProps)(ConnectedList);

export default List;