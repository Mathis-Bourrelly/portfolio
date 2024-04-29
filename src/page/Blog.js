import React from "react"
import Layout from "../comp/Layout";
import AllBlog from "../comp/AllBlog";

const Blog = ({langData ,currentLang, setCurrentLang}) => {
    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <div className="container">
                <AllBlog/>
            </div>
        </>
    );
};

export default Blog
