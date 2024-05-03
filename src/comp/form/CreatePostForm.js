import React, {useState} from 'react';

const CreatePostForm = ({langData ,currentLang, setCurrentLang}) => {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('1');
    const [body, setBody] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/posts/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: userId,
                    title: title,
                    //body: body,
                })
            });

            if (response.ok) {
                setSuccessMessage(langData[currentLang].postNewSuccessMsg);
                setErrorMessage('');
                setTitle('');
                setUserId('');
                setBody('');
            } else {
                throw new Error(langData[currentLang].postNewErrorMsg);
            }
        } catch (error) {
            setErrorMessage(langData[currentLang].postNewErrorMsg);
            setSuccessMessage('');
        }
    };

    return (
        <div className="container">
            <div className="card form">
                <h2>{langData[currentLang].postCreate}</h2>
                {successMessage && <div className="success">{successMessage}</div>}
                {errorMessage && <div className="error">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">{langData[currentLang].postTitle}</label>
                        <input
                            className="text-input"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="body">{langData[currentLang].postBody}</label>
                        <textarea
                            className="text-input"
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="new-button">{langData[currentLang].postCreateBtn}</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostForm;
