import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useTheme } from "../ThemeContext";

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
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
  "/img/11.jpg",
  "/img/12.jpg",
  "/img/13.jpg",
  "/img/14.jpg",
  "/img/15.jpg",
  "/img/16.jpg",
  "/img/17.jpg",
  "/img/18.jpg",
  "/img/19.jpg",
];

const photos = [
  "비로봉",
  "비로봉",
  "봉래대",
  "삼선암",
  "구룡폭포",
  "내금강 묘길상",
  "내금강 보덕암",
  "내금강 삼불암",
  "내금강 표훈사",
  "동석동",
  "만물상",
  "바봉폭포",
  "삼일포",
  "수정봉",
  "신계천",
  "집선연봉",
  "해금강 일출",
  "금강산 벚꽃",
  "금강산호텔 앞 벚꽃",
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

function Spring() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(navi[1].link);
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
            <div className={styles.topContent} id="top">
              <h1>사진관</h1>
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
                  <span className={styles.photo}>
                    <h2>{photos[currentIndex]}</h2>
                  </span>
                </div>
                <button
                  className={classNames(styles.arrow, styles.rightArrow)}
                  onClick={handleNextClick}
                >
                  &#9654;
                </button>
              </div>
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

export default Spring;
