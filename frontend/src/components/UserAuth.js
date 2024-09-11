import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        const url = isLogin 
            ? 'http://localhost:8082/api/users/login' 
            : 'http://localhost:8082/api/users/register';

        try {
            const response = await axios.post(url, isLogin ? null : { username, password }, {
                params: isLogin ? { username, password } : {},
            });

            const token = response.data.token; 

            alert(`User ${isLogin ? 'logged in' : 'registered'} successfully!`);
            if (isLogin && onLogin) {
                localStorage.setItem('token', token);
                onLogin(); 
            }
        } catch (error) {
            alert('Error during authentication. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>{isLogin ? 'User Login' : 'User Register'}</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleAuth} style={styles.button}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
                {isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '300px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    toggle: {
        color: '#007bff',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default UserAuth;
