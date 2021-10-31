import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.initialize.js';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [auth])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {

        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user, setUser,
        signInWithGoogle,
        isLoading,
        setIsLoading,
        logOut
    }
}

export default useFirebase;






