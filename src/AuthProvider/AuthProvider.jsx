import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../__config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();



    const userInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;