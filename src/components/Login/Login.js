import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Login plz...</h2>

            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}> Google Signing</button>
            </div>



            <form>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;