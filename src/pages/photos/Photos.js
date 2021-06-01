import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneAlbumPhotos } from "../../actions/album.js";
import "./photos.css";

export const Photos = (props) => {
  const { getOneAlbumPhotos, photos } = props;

  const [photoLoading, setPhotoLoading] = useState(true);

  const { albumId } = useParams();

  useEffect(() => {
    getOneAlbumPhotos(albumId).then(setPhotoLoading(false));
  }, [getOneAlbumPhotos, albumId]);

  return (
    <div className="photo__root__grid">
      <div className="photo__root">
        {!photoLoading
          ? photos.map((photo) => {
              return (
                <div className="photo__card" key={photo.id}>
                  <div className="photo__img">
                    <img
                      src={photo.thumbnailUrl}
                      alt="photo__image"
                      className="img"
                    />
                  </div>
                  <div className="photo__title">
                    <p>{photo.title}</p>
                  </div>
                </div>
              );
            })
          : "...Loading"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.albumPhotos,
});

export default connect(mapStateToProps, { getOneAlbumPhotos })(Photos);
