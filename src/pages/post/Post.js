import React, { useEffect, useState } from "react";
import "./post.css";
import { connect } from "react-redux";
import { getPost } from "../../actions/posts.js";
import { getComments } from "../../actions/comments.js";
import { useParams } from "react-router-dom";

const Post = (props) => {
  const { getComments, getPost } = props;
  const { comments, post } = props;

  const [postLoading, setPostLoading] = useState(true);
  console.log("🚀 ~ file: Post.js ~ line 12 ~ Post ~ postLoading", postLoading);
  const [commentsLoading, setCommentsLoading] = useState(true);
  console.log(
    "🚀 ~ file: Post.js ~ line 14 ~ Post ~ commentsLoading",
    commentsLoading
  );

  const { postId } = useParams();
  console.log("postId", postId);

  useEffect(() => {
    getPost(postId).then((result) => {
      if (result.status === 200) {
        setPostLoading(false);
      }
    });
    getComments(postId).then((result) => {
      console.log(
        "🚀 ~ file: Post.js ~ line 29 ~ getComments ~ result",
        result
      );
      if (result.status === 200) {
        setCommentsLoading(false);
      }
    });
  }, [getPost, getComments, postId]);

  return (
    <div className="post__root">
      {!postLoading && !commentsLoading ? (
        <div className="post__root__flex">
          {/* <pre className="post__section">{JSON.stringify(post)}</pre> */}
          <div className="post_section">
            <h2 className="post__heading">Post</h2>
            <div className="post">
              <h3 className="post__title">{post.title}</h3>
              <p className="post__body">{post.body}</p>
            </div>
          </div>
          {/* <pre className="comment__section">{JSON.stringify(comments)}</pre> */}
          <div className="post__comment__root">
            <h2 className="comment_heading">Comment</h2>
            <div className="comment__section">
              {comments.map((comment) => {
                return (
                  <div key={comment.id} className='comment'>
                    <h3 className="name">{comment.name}</h3>
                    <p className="comment__body">{comment.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        "...Loading"
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { comments: state.comments, post: state.post };
};

export default connect(mapStateToProps, { getPost, getComments })(Post);
