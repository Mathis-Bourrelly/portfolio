import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {useParams} from "react-router-dom";

const SinglePost = ({postId, langData ,currentLang, setCurrentLang}) => {
    const [response, setPosts] = useState(null);
    let postElements


    function getPosts() {
        fetch("https://dummyjson.com/posts/"+postId)
            .then(response => response.json())
            .then(result => setPosts(result))
            .catch(error => console.log('error', error))
    }

    if(!response)
    {
        getPosts()
    }
    if (response) {
        console.log(response)
            let postElementsTab =
                    <div key={response.id} className="single-post">
                        <div className="post-title">{response.title}</div>
                        <div className="post-body">{response.body}</div>
                        <div className="container-reactions">
                            <div className="reactions">Reactions: {response.reactions}</div>
                            <input type="checkbox" id={"like-checkbox-"+response.id} className="hidden-check-box"/>
                            <label htmlFor={"like-checkbox-"+response.id} className="button like">
                                👍
                            </label>
                        </div>
                    </div>
            postElements= <div className="post-list">{postElementsTab}</div>
    } else {
        postElements = <div className="container-spinner"><Spinner/></div>
    }

    return (<>{postElements}</>
    )
};
export default SinglePost