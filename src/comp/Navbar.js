import React, {useState, useEffect} from "react";
import DarkModeToggle from "./DarkModeToggle";
import LangButton from "./langButton";

const Navbar = ({currentLang, setCurrentLang}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-start">
                    <a href="/" className="nav-title">Title</a>
                    <a className="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div className="nav-end">
                    <DarkModeToggle/>
                    <LangButton currentLang={currentLang} setCurrentLang={setCurrentLang}/>
                </div>
            </div>
        </>
    );
};

export default Navbar;
