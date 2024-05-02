import React from "react"
import CreatePostForm from "../comp/form/CreatePostForm";
import Layout from "../comp/Layout";

const NewPost = ({langData, currentLang, setCurrentLang}) => {
    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <CreatePostForm langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        </>
    );
};

export default NewPost
