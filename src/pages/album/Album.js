import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./album.css";
import { getAllAlbum } from "../../actions/album.js";

export const Album = (props) => {
  const { getAllAlbum, albums } = props;

  const [albumLoading, setAlbumLoading] = useState(true);

  useEffect(() => {
    getAllAlbum().then(() => {
      setAlbumLoading(false);
    });
  }, [getAllAlbum]);

  return (
    <div className="root__album">
      {!albumLoading
        ? albums.map((album) => {
            return (
              <Link to={`albums/${album.id}/photos`} key={album.id}>
                <div className="album__title">{album.title}</div>
              </Link>
            );
          })
        : "...Loading"}
    </div>
  );
};

const mapStateToProps = (state) => ({
  albums: state.album,
});

export default connect(mapStateToProps, {
  getAllAlbum,
})(Album);
