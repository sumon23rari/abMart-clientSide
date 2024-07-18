import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import auth from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
  const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const axiosPublic=useAxiosPublic();
  
    const googleProvider=new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        setLoading(true)
      return  signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const profileUpdate=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    };

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if (currentUser) {
                const userInfo={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                   
                    if (res.data.token) {
                        localStorage.setItem('abMartAccess-token',res.data.token)
                        setLoading(false)
                    }
                })
            } else {
              localStorage.removeItem('abMartAccess-token') 
              setLoading(false) 
            }
           setLoading(false)
        })
        return()=>{
            return unSubscribe()
        }
    },[axiosPublic])
    const authInfo={handleGoogleSignIn,createUser,loading,logInUser,profileUpdate,user,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;