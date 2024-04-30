import React from "react"
import Layout from "../comp/Layout";
import SinglePost from "../comp/SinglePost";
import {useParams} from "react-router-dom";

const OnePost = ({langData ,currentLang, setCurrentLang}) => {
    const { postId } = useParams()
    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <div className="container">
                <SinglePost postId={postId} langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            </div>
        </>
    );
};

export default OnePost
