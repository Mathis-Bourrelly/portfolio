import React, {useEffect, useState} from "react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);


    return (
        <label className="switch">
            <input type="checkbox" checked={isDark} onChange={({ target }) => setIsDark(target.checked)} aria-label="Dark mode toggle"/>
                <span className="slider round"></span>
        </label>

    );
};
export default DarkModeToggle