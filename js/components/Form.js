import React, {useState} from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticle(article));
    },
  };
};

const ConnectedForm = (props) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    props.addArticle({
      title,
    });
    setTitle('');
  };

  return (
    <form >
      <div>
        <label>Title: </label>
        <input type="Text" value={title} onChange={(event) => handleChange(event)} />
      </div>
      <button style={{'marginTop': '20px'}} onClick={() => handleSubmit()} type="button">Submit</button>
    </form>
  );
};

const List = connect(null, mapDispatchToProps)(ConnectedForm);

export default List;
