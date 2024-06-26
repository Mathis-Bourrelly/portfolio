import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";

const AllBlog = ({langData ,currentLang, setCurrentLang}) => {
    const [response, setPosts] = useState(null);
    let postElements

    function getPosts() {
        fetch("https://dummyjson.com/posts?limit=10")
            .then(response => response.json())
            .then(result => setPosts(result))
            .catch(error => console.log('error', error))
    }

    if(!response)
    {
        getPosts()
    }
    if (response) {
        if (response.total > 0) {
            let postElementsTab = response.posts.map(post => {
                    return(
                        <div key={post.id} className="post">
                            <a className="post-title" href={"/post/show/"+post.id}>{post.title}</a>
                            <div className="post-body">{post.body}</div>
                            <div className="container-reactions">
                                <div className="reactions">Reactions: {post.reactions}</div>
                                <input type="checkbox" id={"like-checkbox-"+post.id} className="hidden-check-box"/>
                                <label htmlFor={"like-checkbox-"+post.id} className="button like">
                                    {/*TODO REPLACE BY [currentLang].blogLikeBtn    */}
                                    👍
                                </label>

                            </div>
                        </div>)})
            postElements= <div className="post-list">{postElementsTab}</div>
        } else {
            postElements = <div className="empty">{langData[currentLang].noContent}</div>

        }
    } else {
        postElements = <div className="container-spinner"><Spinner/></div>
    }

    return (<>{postElements}</>
    )
};
export default AllBlog