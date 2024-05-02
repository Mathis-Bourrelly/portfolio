import React from "react"
import Layout from "../comp/Layout";
import AllBlog from "../comp/AllBlog";

const Blog = ({langData, currentLang, setCurrentLang}) => {
    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <div className="container">
                <div className="container-new">
                    <a href="/post/new" className="new-button">{langData[currentLang].newBlog}<div className="plus">+</div></a>
                </div>
                <AllBlog/>
            </div>
        </>
    );
};

export default Blog
