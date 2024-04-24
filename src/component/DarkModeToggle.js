import React, {useEffect, useState} from "react";
import { useMediaQuery } from "react-responsive";

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setIsDark(isSystemDark)
    );

    return (
        <input
            type="checkbox" checked={isDark} onChange={({ target }) => setIsDark(target.checked)} aria-label="Dark mode toggle"
        />
    );
};
export default DarkModeToggle