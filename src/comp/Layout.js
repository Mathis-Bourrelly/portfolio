import React from "react"
import DarkModeToggle from "./DarkModeToggle"
import Navbar from "./Navbar";

const Layout = ({currentLang, setCurrentLang}) => {

    return (
        <>
            <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        </>
    );
};

export default Layout
