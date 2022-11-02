import { useState } from 'react';
import Content from './Content';
import Login from './Login';

function Home() {
    const [login, setLogin] = useState(false);
    const [mode, setMode] = useState('');
    function handleLogin(status) {
        setLogin(status);
    }

    return <>{login ? <Content mode={mode} /> : <Login setLogin={handleLogin} setMode={setMode} />}</>;
}

export default Home;
