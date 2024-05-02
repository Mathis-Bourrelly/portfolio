import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";

const SinglePost = ({postId, langData, currentLang, setCurrentLang}) => {
    const [response, setResponse] = useState(null);
    const [responseComment, setResponseComment] = useState(null);
    const [isPostDeleted, setIsPostDeleted] = useState(false)
    let postElements
    let commentElements


    function getPost() {
        fetch("https://dummyjson.com/posts/" + postId)
            .then(response => response.json())
            .then(result => setResponse(result))
            .catch(error => console.log('error', error))
    }

    function getPostComment() {
        fetch("https://dummyjson.com/posts/" + postId + "/comments")
            .then(responseComment => responseComment.json())
            .then(result => setResponseComment(result))
            .catch(error => console.log('error', error))
    }

    function deletePost() {
        fetch('https://dummyjson.com/posts/'+postId, {
            method: 'DELETE',
        })
            .then(responseDelete => responseDelete.json())
            .then(result => {
                setIsPostDeleted(result.isDeleted)
            })
            .catch(error => console.log('error', error))
    }

    function editPost() {
        fetch("https://dummyjson.com/posts/" + postId, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'Lorem ipsum dolor sit amet',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet deserunt dolorem est ex harum hic, impedit ipsa ipsam maxime numquam odio possimus sequi sit soluta totam velit voluptatem?'
            })
        })
            .then(responseEdit => responseEdit.json())
            .then(result => {setResponse(result)})
            .catch(error => console.log('error', error))
    }

    if (!response) {
        getPost()
        getPostComment()
    }
    if (response) {
        let postElementsTab =
            <div key={response.id} className="single-post">
                <div className="post-title">{ isPostDeleted ? langData[currentLang].deleted :response.title}</div>
                <div className="post-body">{isPostDeleted ? "" :response.body}</div>
                <div className="container-reactions">
                    <div className="reactions">Reactions: {response.reactions}</div>
                    <div>
                        <input type="checkbox"  id={"like-checkbox-" + response.id} className="hidden-check-box"/>
                        <label htmlFor={"like-checkbox-" + response.id} className="button like">
                            👍
                        </label>
                        <input type="checkbox" onClick={()=> editPost()} id={"edit-checkbox-" + response.id} className="hidden-check-box"/>
                        <label htmlFor={"edit-checkbox-" + response.id} className="button like">
                            📝
                        </label>
                        <input type="checkbox" onClick={()=> deletePost()} id={"remove-checkbox-" + response.id} className="hidden-check-box"/>
                        <label htmlFor={"remove-checkbox-" + response.id} className="button like">
                            ❌
                        </label>
                    </div>
                </div>
            </div>

        postElements = <div className="post-list">{postElementsTab}</div>
    } else {
        postElements = <div className="container-spinner"><Spinner/></div>
    }

    if (responseComment) {
        if (responseComment.total > 0) {
            commentElements = responseComment.comments.map(comment => {
                return (
                    <div key={comment.id} className="post">

                        <div className="post-body">{comment.body}</div>
                        <div className="container-reactions">
                            <div className="comment-username">{comment.user.username}</div>
                        </div>
                    </div>)
            })
        } else {
            commentElements = <div className="empty">{langData[currentLang].noContent}</div>

        }
    } else {
        commentElements = <div className="container-spinner"><Spinner/></div>
    }

    return (<>
            {postElements}
            <div className="post-list">
                {commentElements}
            </div>
        </>
    )
};
export default SinglePost