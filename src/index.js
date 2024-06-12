import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Home";
import Info from "./component/Info";
import Spring from "./component/Spring";
import Summer from "./component/Summer";
import Fall from "./component/Fall";
import Winter from "./component/Winter";
import Photo from "./component/Photo";
import { ThemeProvider } from "./ThemeContext";
import "./index.css"; // Import the CSS file for animations

const root = ReactDOM.createRoot(document.getElementById("root"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/fall" element={<Fall />} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </ThemeProvider>
);
