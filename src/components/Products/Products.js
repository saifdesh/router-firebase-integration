import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Products = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Products</h1>
            <p>Current user is: {user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Products;