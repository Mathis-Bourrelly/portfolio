const LangButton = ({ currentLang, setCurrentLang }) => {
    const langArray = [{"FR":"🇫🇷"},{"EN":"🇬🇧"},{"??":"??"}];

    function changeLang() {
        let selectLang = document.getElementById("lang-select").value
        setCurrentLang(selectLang);
    }

    const languages = langArray.map(lang => (
        <option key={Object.keys(lang)} value={Object.keys(lang)}>
            {Object.values(lang)}
        </option>
    ));

    return (
        <>
            <select className="lang" onChange={() => changeLang()} value={currentLang} name="lang" id="lang-select">
                {languages}
            </select>
        </>
    );
};

export default LangButton;