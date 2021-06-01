import React, { useEffect, useState } from "react";
import "./user.css";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../actions/users.js";
import { getToDos } from "../../actions/toDo.js";
import { getSingleUserPosts } from "../../actions/posts.js";
import ToDos from "../../components/toDo/ToDo.js";
const Users = (props) => {
  const [userLoading, setUserLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  // const [albumLoading, setAlbumLoading] = useState(true);
  const [toDoLoading, setToDoLoading] = useState(true);

  const { getUser, user, getSingleUserPosts, getToDos, toDos, posts } = props;

  const { userId } = useParams();

  useEffect(() => {
    getUser(userId).then((result) => {
      setUserLoading(false);
    });

    getSingleUserPosts(userId).then((result) => {
      setPostsLoading(false);
    });

    getToDos(userId).then((result) => {
      console.log("🚀 ~ file: User.js ~ line 29 ~ getToDos ~ result", result);
      setToDoLoading(false);
    });
  }, [getUser, userId, getSingleUserPosts, getToDos]);

  return (
    <div className="user__flex">
      <div className="first__section">
        {!userLoading ? (
          <div className="user">
            <h2 className="user__name">{`User Name: ${user.username}`}</h2>
            <div className="user__details">
              <div className="website gap">{`Website: ${user.website}`}</div>
              <div className="phone gap">{`Phone: ${user.phone}`}</div>
              <div className="email gap">{`Email: ${user.email}`}</div>
              <h3 className="address">Address:</h3>
              <div className="address__section">
                <div className="suite gap">{`Suite: ${user.address.suite}`}</div>
                <div className="street gap">{`Street: ${user.address.street}`}</div>
                <div className="city gap">{`City: ${user.address.city}`}</div>
                <div className="zip__code gap">{`Zip Code: ${user.address.zipcode}`}</div>
              </div>
            </div>
          </div>
        ) : (
          "...Loading"
        )}

        {!toDoLoading ? <ToDos toDos={toDos} /> : "...Loading"}
      </div>

      <div className="second__section">
        {!postsLoading ? (
          <div className="posts">
            <h2 className="post__title">Posts</h2>
            <div className="post__scroll">
              {posts.map((item) => {
                return (
                  <Link to={`posts/${item.id}`} key={item.id}>
                    <div className="post">
                      <h3 className="title">{item.title}</h3>
                      <p className="body">{item.body}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          "...Loading"
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    toDos: state.singleUserToDos,
    posts: state.singleUserPosts,
  };
};

export default connect(mapStateToProps, {
  getUser,
  getToDos,
  getSingleUserPosts,
})(Users);
