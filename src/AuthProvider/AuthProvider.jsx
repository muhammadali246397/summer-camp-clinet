import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../__config';
import axios from 'axios';


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
            if(currentUser){
                axios.post('https://assignment-twelve-server-muhammadali246397.vercel.app/jwt',{email:currentUser.email})
                .then(data => {
                    console.log('assess token is ',data)
                    localStorage.setItem('access-token',data.data)
                })
            }
            else(
                localStorage.removeItem('access-token')
            )
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