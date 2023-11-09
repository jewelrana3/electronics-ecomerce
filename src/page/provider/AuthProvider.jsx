import {useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';


const auth = getAuth(app);
export const  AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        signOut(auth)
    }

    const userInfo = {
        createUser,
        signIn,
        logOut,
        loading,
        user,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,authUser =>{
            if(authUser){
                setUser(authUser)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
    
    return(
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;