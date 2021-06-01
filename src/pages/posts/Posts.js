import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/posts.js";
import "./posts.css";

const Users = (props) => {
  console.log(props);

  const { getPosts, posts } = props;

  const [loading, setLoading] = useState(true);
  const [postCount, setPostCount] = useState(5);
  const [paginationPosts, setPaginationPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result) => {
      if (result.status === 200) {
        setLoading(false);
      }
    });
  }, [getPosts]);

  useEffect(() => {
    if (!loading) {
      setPaginationPosts(posts.slice(0, 5));
    }
  }, [loading, posts]);

  const loadMore = () => {
    setPostCount(postCount + 10);
  };

  useEffect(() => {
    setPaginationPosts(posts.slice(0, postCount));
  }, [postCount, posts]);

  return (
    <div className="posts__body">
      <h2 className="post__title">Top Posts</h2>
      <div className="posts__scroll">
        {!loading
          ? paginationPosts.map((item) => {
              return (
                <Link to={`posts/${item.id}`} key={item.id}>
                  <div
                    className="posts__post"
                    // onClick={() => goToPost(item.id)}
                  >
                    <h3 className="title">{item.title}</h3>
                    <p className="body">{item.body}</p>
                  </div>
                </Link>
              );
            })
          : "...LOADING"}
        <button className="load__more-btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(Users); 