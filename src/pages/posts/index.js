import React from "react";
import Posts from "./Posts.js";
import Users from "./User.js";

const index = () => {
  return (
    <div className="root">
      <Posts />
      <Users />
    </div>
  );
};

export default index;
