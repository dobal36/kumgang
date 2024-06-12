import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import classNames from "classnames";

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

function Info() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(navi[0].link);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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
              <h1>공원연혁</h1>
            </div>
            <div className={styles.subContent}>
              <p>
                <img
                  className={styles.mountain}
                  src="/img/info-mountain.jpg"
                  alt="산"
                />
              </p>
              <p>
                <h2>금강산 관광이 걸어온 길</h2>
              </p>
              <p>
                금강산 관광특구는 미래의 통일된 한반도를 경험할 수 있는 살아있는
                통일 교육의 장입니다.
              </p>
              <p>
                금강산은 신라, 고려 때부터 한반도를 대표하는 비경으로
                손꼽혔습니다.
              </p>
              <p>‘자연이 한반도에 내려준 최고의 선물’</p>
              <p className={styles.history}>
                <img src="/img/history.jpg" alt="연혁" />
              </p>
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

export default Info;
