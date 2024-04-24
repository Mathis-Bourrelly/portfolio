import React from "react"
import DarkModeToggle from "./DarkModeToggle"

const Layout = () => {

    return (
        <>
            <nav>
                <h2>Title</h2>
                <DarkModeToggle></DarkModeToggle>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Layout
