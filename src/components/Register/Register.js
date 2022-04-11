import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="your name" />
                <br></br>
                <input type="text" placeholder="type your email" />
                <br />
                <input type="password" placeholder='type password' />
                <br />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Register;