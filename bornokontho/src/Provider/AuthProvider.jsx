import React, { useEffect, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase.init';

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

 const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
}

 const updateUserProfile = profileInfo => {
        return updateProfile(auth.currentUser, profileInfo);
    }

     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('user in the auth state change', currentUser)
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const [cuser,setCuser]= useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://bornokontho-server.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setCuser(data));
    }
  }, [user]);
console.log('authcuser', cuser);

    const authInfo = {
        createuser,
        signInUser,
        updateUserProfile,
        user,
        setUser,
        loading,
        setLoading,
        logOut,
        cuser,
        googleSignIn
        

    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
