import React from "react"
import DarkModeToggle from "./DarkModeToggle"
import Navbar from "./Navbar";

const Layout = ({langData, currentLang, setCurrentLang}) => {

    return (
        <>
            <Navbar langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        </>
    );
};

export default Layout
