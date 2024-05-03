import './App.css'
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import Blog from "./page/Blog";
import OnePost from "./page/OnePost";
import NewPost from "./page/NewPost";
import Login from "./page/login";

function App() {
    const [currentLang, setCurrentLang] = useState("??");
    const langData = {
        "FR": {
            "name": "Mathis Bourrelly",
            "blog": "Blog",
            "title1": "MASTER",
            "title2": "EXPERT EN DÉVELOPPEMENT LOGICIEL",
            "title3": "EN ALTERNANCE",
            "noContent": "Aucun commentaire trouvé",
            "deleted": "Post supprimé",
            "newBlog": "Nouveau post",
            "blogLikeBtn": "👍",
            "blogEditBtn": "📝",
            "blogDeleteBtn": "❌",
            "postNewSuccessMsg": "Le post a été créé avec succès.",
            "postNewErrorMsg": "Erreur lors de la création du post.",
            "postTitle": "Titre :",
            "postBody": "Contenu du post:",
            "postCreate": "Création de post:",
            "postCreateBtn": "Créer le post",
            "login": "Connexion",
            "loginUser": "Nom d'utilisateur:",
            "loginPassword": "Mot de passe:",
            "loginBtn": "Se connecter",
            "loginStatus": "Status:",
            "connected": "Connecté ✅",
            "disconnected": "Déconnecter ❌",
        },
        "EN": {
            "name": "Mathis Bourrelly",
            "blog": "Blog",
            "title1": "MASTER",
            "title2": "SOFTWARE DEVELOPMENT EXPERT",
            "title3": "IN INTERNSHIP",
            "noContent": "No content found",
            "deleted": "Deleted post",
            "newBlog": "New post",
            "blogLikeBtn": "👍",
            "blogEditBtn": "📝",
            "blogDeleteBtn": "❌",
            "postNewSuccessMsg": "The post was created successfully.",
            "postNewErrorMsg": "Error creating the post.",
            "postTitle": "Title:",
            "postBody": "Content of the post:",
            "postCreate": "Post creation",
            "postCreateBtn": "Create the post",
            "login": "Login",
            "loginUser": "Username:",
            "loginPassword": "password:",
            "loginBtn": "login",
            "loginStatus": "Status:",
            "connected": "Connected ✅",
            "disconnected": "Disconnected ❌",
        },
        "??": {
            "name": "???????????????",
            "blog": "?????????",
            "title1": "???????????????",
            "title2": "??????????????? ??????????????? ???????????????",
            "title3": "?? ???????????????",
            "noContent": "??????????????? ???????????????",
            "deleted": "??????????????? ???????????????",
            "newBlog": "???????????????",
            "blogLikeBtn": "???",
            "blogEditBtn": "???",
            "blogDeleteBtn": "???",
            "postNewSuccessMsg": "??????????????? ???????????????",
            "postNewErrorMsg": "??????????????? ???????????????",
            "postTitle": "????????",
            "postBody": "???????????????",
            "postCreate": "???????????????",
            "postCreateBtn": "????????",
            "login": "????????",
            "loginUser": "???????????????",
            "loginPassword": "???????????????",
            "loginBtn": "???????????????",
            "loginStatus": "??????",
            "connected": "????????",
            "disconnected": "???????????????",
        }
    };
    return (<BrowserRouter>
        <Routes>
            <Route path="/"
                   element={<Home langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/blog"
                   element={<Blog langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/post/show/:postId"
                   element={<OnePost langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/post/new/"
                   element={<NewPost langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
            <Route path="/login"
                   element={<Login langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App