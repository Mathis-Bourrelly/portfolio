import './App.css'
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import Blog from "./page/Blog";
import OnePost from "./page/OnePost";

function App() {
    const [currentLang, setCurrentLang] = useState("FR");
    const langData = {
        "FR":
            {"name": "Mathis Bourrelly",
                "title1": "MASTER",
                "title2": "EXPERT EN DÉVELOPPEMENT LOGICIEL",
                "title3": "EN ALTERNANCE",

                "noContent": "Aucun commentaire trouvé",
            },
        "EN": {
            "name": "Mathis Bourrelly",
            "title1": "MASTER",
            "title2": "SOFTWARE DEVELOPMENT EXPERT",
            "title3": "IN INTERNSHIP",
            "noContent": "No content found",
        }
    };
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/blog" element={<Blog langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/post/:postId" element={<OnePost langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App