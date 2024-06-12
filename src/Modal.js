import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ show, onClose, children, images }) => {
  if (!show) {
    return null;
  }

  const handleImageClick = (index) => {
    if (index === 1) {
      alert("정답입니다!");
      onClose();
    } else {
      alert("틀렸습니다. 힌트: '풍악산'은 금강산의 '가을'의 이름이다.");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          {children}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={styles.modalImage}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
