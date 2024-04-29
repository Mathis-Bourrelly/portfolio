import React, {useState, useEffect} from "react";
import DarkModeToggle from "./DarkModeToggle";
import LangButton from "./langButton";

const Navbar = ({langData ,currentLang, setCurrentLang}) => {
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
                    <a href="/"><img src="/img/pp_pro_round.png" alt="pp_pro_round"/></a>
                    <a className="active nav-title" href="/">{langData[currentLang].name}</a>
                    <a href="/blog">Blog</a>
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
