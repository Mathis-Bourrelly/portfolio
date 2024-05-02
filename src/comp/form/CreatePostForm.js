import React, {useState} from 'react';

const CreatePostForm = () => {
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
                setSuccessMessage('Le post a été créé avec succès.');
                setErrorMessage('');
                setTitle('');
                setUserId('');
                setBody('');
            } else {
                throw new Error('Erreur lors de la création du post.');
            }
        } catch (error) {
            setErrorMessage('Erreur lors de la création du post.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="container">
            <div className="card form">
                <h2>Création de post</h2>
                {successMessage && <div className="valid">{successMessage}</div>}
                {errorMessage && <div className="error">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Titre:</label>
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
                        <label htmlFor="body">Contenu du post:</label>
                        <textarea
                            className="text-input"
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="new-button">Créer le post</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostForm;
