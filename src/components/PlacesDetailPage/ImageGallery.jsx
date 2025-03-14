import React from "react";
import styles from "./ImageGallery.module.css";
import { PlaceHolderImg2 } from "../common/Images";

const ImageGallery = ({ handleClickViewMoreDetails, images }) => {
  
  return (
    <div className={styles.imageGallery}>
      <div className={styles.imageGalleryTop}>
        <div className={styles.mainImage}>
          <img src={images && images[0] && images[0]?.original ? images[0]?.original : PlaceHolderImg2} alt="Main exhibit" />
        </div>
        <div className={styles.thumbnails}>
          {images?.slice(1).map((image, index) => (
            <img key={index} src={image.original} alt={`Exhibit ${index + 1}`} />
          ))}
        </div>
      </div>
      <button className={styles.viewMoreButton} onClick={handleClickViewMoreDetails}>
        Ver más
      </button>
    </div>
  );
};

export default ImageGallery;