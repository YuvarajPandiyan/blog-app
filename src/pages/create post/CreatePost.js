import React from "react";
import { connect } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { createPost } from "../../actions/createPost.js";
import "./CreatePost.css";
import { useState } from "react";

const editor = new EditorJS({
  holder: "editorJs",
  tools: {
    header: Header,
  },
});

export const CreatePost = (props) => {
  const { createPost, post } = props;

  const [createLoading, setCreateLoading] = useState(true);

  const submit = () => {
    editor.save().then((outPutData) => {
      console.log(
        "🚀 ~ file: CreatePost.js ~ line 16 ~ editor.save ~ outPutData",
        outPutData
      );
      createPost(outPutData).then(() => {
        setCreateLoading(false);
      });
      editor.clear();
    });
  };

  return (
    <div className="post__page">
      <h2>Post Editor</h2>
      <div className="editor__root">
        <div id="editorJs" className="editor"></div>
      </div>
      <button className="post-btn" onClick={submit}>
        Post
      </button>

      <pre>{JSON.stringify(post)}</pre>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.createPost,
});

export default connect(mapStateToProps, { createPost })(CreatePost);
