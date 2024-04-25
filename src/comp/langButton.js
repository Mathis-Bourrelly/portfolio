const LangButton = ({ currentLang, setCurrentLang }) => {
    const langArray = [{"FR":"🇫🇷"},{"EN":"🇬🇧"}];

    function changeLang() {
        let selectLang = document.getElementById("lang-select").value
        setCurrentLang(selectLang);
    }

    const languages = langArray.map(lang => (
        <option key={Object.keys(lang)[0]} value={Object.keys(lang)[0]}>
            {Object.values(lang)[0]}
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