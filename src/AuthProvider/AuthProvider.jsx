import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../__config';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const updateUserProfile = (name,img) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          })
    } 

    const googlesignin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userInfo = {
        user,
        createUser,
        updateUserProfile,
        logout,
        signIn,
        googlesignin
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;