import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, getDataUsingSaga } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.getData();
  // }

  componentDidMount() {
    this.props.getDataUsingSaga("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    return (
      <ul>
        {this.props.articles.length > 0 &&
          this.props.articles.map((item, i) => <li>{item.title} </li>)}
      </ul>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
};

export default connect(
  mapsStateToProps,
  {getDataUsingSaga} 
)(Post);