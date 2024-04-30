import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './navbar';
import 'index.scss';

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
    }

    return (
        <>
            <Navbar />
            <main className="app">
                <Outlet />
            </main>
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};

export default Layout;