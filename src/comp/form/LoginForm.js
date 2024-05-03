import React, {useState} from 'react';

const LoginForm = ({langData, currentLang, setCurrentLang}) => {
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => {
                if (res.ok) {
                    // La réponse est OK (statut 200)
                    return res.json();
                } else {
                    // Gérer les cas d'erreur ici (par exemple, afficher un message d'erreur)
                    throw new Error('Échec de la connexion. Veuillez vérifier vos identifiants.');
                }
            })
            .then(data => {
                setIsLogged(true);
            })
            .catch(error => {
                setIsLogged(false);
                setError(error.message);
            });
        setUsername('');
        setPassword('');
    };

    return (
        <div className="container">
            <div className="card form">
                <form onSubmit={handleSubmit}>
                    <h2>{langData[currentLang].login}</h2>
                    <div>{langData[currentLang].loginStatus} {isLogged ? langData[currentLang].connected : langData[currentLang].disconnected}</div>
                    <br/>
                    <div>{error}</div>
                    <br/>
                    <div>
                        <label htmlFor="username">{langData[currentLang].loginUser}</label>
                        <input
                            className="text-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">{langData[currentLang].loginPassword}</label>
                        <input
                            className="text-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="new-button">{langData[currentLang].loginBtn}</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;