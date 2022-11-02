import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { users } from '../store/users';

function Login({ setLogin, setMode }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit() {
        const userFilted = users.filter((user) => user.username === username);
        if (userFilted);
        userFilted.forEach((user) => {
            if (user.password === password) {
                setLogin(true);
                setMode(user.type);
            }
        });
    }

    return (
        <Form className="login">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                Submit
            </Button>
        </Form>
    );
}

export default Login;
