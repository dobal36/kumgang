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
  "/img/spring1.jpg",
  "/img/spring2.jpg",
  "/img/spring3.jpg",
  "/img/spring4.jpg",
  "/img/spring5.jpg",
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
            <div className={styles.topContent}>
              <h1>봄-금강산(金剛山)</h1>
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
                <h2>온 산이 새싹과 꽃에 뒤덮일 때</h2>
              </p>
              <p>
                봄에 아침 이슬이 태양이 떠오르면서 빛나는 모습이 마치 7대보석 중
                하나인 금강석과 같다하여 금강석이라고 불립니다.
              </p>
              <p>
                새싹이 돋아나고 만물이 소생하며 880여종의 식물이 꽃피는 향기
                그윽한 봄철의 이름은 금강산이라고 합니다.
              </p>
              <YouTube
                videoId={"Zwk0Bohkp6A"} // 동영상 주소
                opts={{
                  width: "100%",
                  height: "50%",
                  playerVars: {
                    autoplay: 1, // 자동 재생 여부
                    modestbranding: 0, // 컨트롤 바에 유튜브 로고 표시 여부
                    loop: 1, // 반복 재생
                    playlist: "Zwk0Bohkp6A", // 반복 재생으로 재생할 플레이 리스트
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

export default Spring;
