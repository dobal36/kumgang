import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import YouTube from "react-youtube";
import Modal from "./Modal";

const youtubes = [
  {
    videoId: "Zwk0Bohkp6A",
    style: "item1",
    title: "금강산",
    link: "/spring",
  },
  {
    videoId: "5WBePN-XFCQ",
    style: "item2",
    title: "봉래산",
    link: "/summer",
  },
  {
    videoId: "vHGqY1hVhFU",
    style: "item3",
    title: "풍악산",
    link: "/fall",
  },
  {
    videoId: "k3P1Gk6BrEo",
    style: "item4",
    title: "개골산",
    link: "/winter",
  },
];

const mobiles = [
  {
    name: "소개",
    img: "",
    link: "/info",
  },
  {
    name: "금강산",
    img: "/img/spring.png",
    link: "/spring",
  },
  {
    name: "봉래산",
    img: "/img/summer.png",
    link: "/summer",
  },
  {
    name: "풍악산",
    img: "/img/fall.png",
    link: "/fall",
  },
  {
    name: "개골산",
    img: "/img/winter.png",
    link: "/winter",
  },
];

const mobiles2 = [
  {
    name: "금강산",
    img: "/img/spring.png",
    link: "/spring",
  },
  {
    name: "봉래산",
    img: "/img/summer.png",
    link: "/summer",
  },
  {
    name: "풍악산",
    img: "/img/fall.png",
    link: "/fall",
  },
  {
    name: "개골산",
    img: "/img/winter.png",
    link: "/winter",
  },
];

const images = [
  {
    src: "/img/summer3.jpg",
    alt: "금강산 여름",
  },
  {
    src: "/img/fall3.jpg",
    alt: "금강산 가을",
  },
  {
    src: "/img/spring3.jpg",
    alt: "금강산 봄",
  },

  {
    src: "/img/winter3.jpg",
    alt: "금강산 겨울",
  },
];

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleVideoClick = (link) => {
    navigate(link);
  };

  const handleListClick = (link) => {
    navigate(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.Home}>
      <Link to="/info">
        <img src="/img/logo.jpg" className={styles.logo} alt="금강산 로고" />
      </Link>
      <div className={styles.mobileHome}>
        <header className={styles.headerHome}>
          <Link to="/">
            <img
              src="/img/logo.jpg"
              className={styles.logo2}
              alt="금강산 로고"
            />
          </Link>
          <button className={styles.btn} onClick={toggleMenu}>
            메뉴
          </button>
        </header>
        {mobiles.map((mobile, index) => (
          <nav
            key={index}
            className={classNames(styles.navigation, {
              [styles.open]: menuOpen,
            })}
          >
            <ol className={styles.navigationList}>
              <li
                className={styles.navigationMenu}
                onClick={() => handleListClick(mobile.link)}
              >
                {mobile.name}
              </li>
            </ol>
          </nav>
        ))}
        {mobiles2.map((mobile, index) => (
          <div key={index} className={styles.mobileMenu}>
            <Link to={mobile.link}>
              <img className={styles.mobileImg} src={mobile.img} alt="금강산" />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.mainHome}>
        {youtubes.map((youtube, index) => (
          <div
            key={index}
            className={classNames(styles.menu, styles[youtube.style])}
            onClick={() => handleVideoClick(youtube.link)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <YouTube
              videoId={youtube.videoId} // 동영상 주소
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1, // 자동 재생 여부
                  modestbranding: 0, // 컨트롤 바에 유튜브 로고 표시 여부
                  loop: 1, // 반복 재생
                  playlist: youtube.videoId, // 반복 재생으로 재생할 플레이 리스트
                },
              }}
              onReady={(e) => {
                e.target.mute(); // 소리 끔
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className={styles.overlay}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
                zIndex: 1,
              }}
            />
            <div className={styles.title}>
              <p className={styles.text}>{youtube.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal show={modalOpen} onClose={toggleModal} images={images}>
        <h2>풍악산을 맞춰라</h2>
        <p>
          <br />
        </p>
      </Modal>
    </div>
  );
}

export default Home;
