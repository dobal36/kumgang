import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useTheme } from "../ThemeContext";
import YouTube from "react-youtube";

const navi = [
  {
    menu: "소개",
    link: "/info",
  },
  {
    menu: "봄",
    link: "/spring",
  },
  {
    menu: "여름",
    link: "/summer",
  },
  {
    menu: "가을",
    link: "/fall",
  },
  {
    menu: "겨울",
    link: "/winter",
  },
  {
    menu: "사진관",
    link: "/photo",
  },
];

const images = [
  "/img/summer1.jpg",
  "/img/summer2.jpg",
  "/img/summer3.jpg",
  "/img/summer4.jpg",
  "/img/summer5.jpg",
];

const mobiles = [
  {
    name: "소개",
    link: "/info",
  },
  {
    name: "금강산",
    link: "/spring",
  },
  {
    name: "봉래산",
    link: "/summer",
  },
  {
    name: "풍악산",
    link: "/fall",
  },
  {
    name: "개골산",
    link: "/winter",
  },
  {
    name: "사진관",
    link: "/photo",
  },
];

function Summer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(navi[2].link);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigate = useNavigate();

  const handleListClick = (link) => {
    setSelectedMenu(link);
    navigate(link);
  };

  const handleListClick2 = (link) => {
    navigate(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.body} ${theme === "dark" ? styles.dark : ""}`}
      data-theme={theme}
    >
      <div className={styles.mobileHome}>
        <header className={styles.headerHome}>
          <Link to="/">
            <img
              src="/img/logo.jpg"
              className={styles.logo2}
              alt="금강산 로고"
            />
          </Link>
          <button onClick={toggleTheme} className={styles.darkButton}>
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </button>
          <button className={styles.btn} onClick={toggleMenu}>
            메뉴
          </button>
        </header>
        {mobiles.map((mobile, index) => (
          <nav
            key={index}
            className={classNames(styles.phone, {
              [styles.open]: menuOpen,
            })}
          >
            <ol className={styles.phoneList}>
              <li
                className={styles.phoneMenu}
                onClick={() => handleListClick2(mobile.link)}
              >
                {mobile.name}
              </li>
            </ol>
          </nav>
        ))}
      </div>
      <header className={styles.head}>
        <div className={styles.top}>
          <Link to="/">
            <img
              src="/img/logo.jpg"
              className={styles.logo}
              alt="금강산 로고"
            />
          </Link>
          <button onClick={toggleTheme} className={styles.darkButton}>
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </button>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {navi.map((navig, index) => (
              <li
                key={index}
                className={`${styles.navigationMenu} ${
                  selectedMenu === navig.link ? styles.active : ""
                }`}
                onClick={() => handleListClick(navig.link)}
              >
                {navig.menu}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.pcMain}>
        <div className={styles.contentMain}>
          <div className={styles.mainContent}>
            <div className={styles.topContent}>
              <h1>여름-봉래산(蓬萊山)</h1>
            </div>
            <div className={styles.subContent}>
              <div className={styles.slider}>
                <button
                  className={classNames(styles.arrow, styles.leftArrow)}
                  onClick={handlePrevClick}
                >
                  &#9664;
                </button>
                <div className={styles.slide}>
                  <img src={images[currentIndex]} alt="봄" />
                </div>
                <button
                  className={classNames(styles.arrow, styles.rightArrow)}
                  onClick={handleNextClick}
                >
                  &#9654;
                </button>
              </div>
              <p>
                <h2>녹음이 우거지고 흰 구름과 안개가 감도는 </h2>
              </p>
              <p>
                계곡과 봉우리에 짙은 녹음이 깔려 신록의 경치를 볼 수 있다해서
                여름철에는 봉래라는 이름으로 불립니다.
              </p>
              <p>
                여름철의 금강산은 마치 신선, 선녀가 사는 산이라 하여 봉래산이라
                합니다.
              </p>
              <p>
                16세기 시인이었던 봉래양서언이 자신의 호를 봉래라고 하여 더욱
                유명해진 이름입니다.
              </p>
              <YouTube
                videoId={"5WBePN-XFCQ"} // 동영상 주소
                opts={{
                  width: "100%",
                  height: "50%",
                  playerVars: {
                    autoplay: 1, // 자동 재생 여부
                    modestbranding: 0, // 컨트롤 바에 유튜브 로고 표시 여부
                    loop: 1, // 반복 재생
                    playlist: "5WBePN-XFCQ", // 반복 재생으로 재생할 플레이 리스트
                  },
                }}
                onReady={(e) => {
                  e.target.mute(); // 소리 끔
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.pcFoot}>
        <div className={styles.footContent}>
          <div className={styles.content}>
            강원도 금강군, 고성군, 통천군
            <br />
            강원특별자치도 고성군 거진읍, 현내면, 수동면, 인제군
            <br />
            Developer - 박준영
          </div>
        </div>
      </footer>
      <button className={styles.upButton} onClick={moveTop}>
        위로
      </button>
    </div>
  );
}

export default Summer;
