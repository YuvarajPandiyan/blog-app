import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../actions/users.js";
import "./user.css";
const User = (props) => {
  const [loading, setLoading] = useState(true);

  const { getUsers, users } = props;

  useEffect(() => {
    getUsers().then((result) => {
      if (result.status === 200) {
        setLoading(false);
      }
    });
  }, [getUsers]);

  return (
    <div className="users__root">
      <div className="title__fixed">
        <h2 className="user_heading">Users</h2>
      </div>
      {!loading ? (
        <div className="user__fix__container">
          <div className="users__container">
            {users.map((user) => {
              return (
                <Link to={`users/${user.id}`} key={user.id}>
                  <div className="user__container" key={user.id}>
                    <h3 className="user__title">{user.username}</h3>
                    <div className="user__email">{user.email}</div>
                    <div className="user__website">{user.website}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        "....LOADING"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, {
  getUsers,
})(User);
