import React, { useState } from 'react';

function ManagerLogin({ onLogin, onBack }) {
    const [password, setPassword] = useState('');
    const correctPassword = 'Ishola@2006';

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            onLogin();
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="manager-login">
            <h1>Manager Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password-input"
                    required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <button className="back-button" onClick={onBack}>Back to Home</button>
        </div>
    );
}

export default ManagerLogin;
