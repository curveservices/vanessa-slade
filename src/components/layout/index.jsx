import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "../layout/footer";
import "./index.scss";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 550) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  ScrollRestoration({
    top: 0,
    behaviour: "smooth",
  });

  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Layout;
