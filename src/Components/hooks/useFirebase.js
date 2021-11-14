import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

        const auth = getAuth();

        const signInUsingGoogle = () => {
            setIsLoading(true);
            const googleProvider = new GoogleAuthProvider();

            signInWithPopup(auth, googleProvider)
                .then(result => {
                    setUser(result.user);
                })
                .finally(() => setIsLoading(false));
        }

        // observe user state change
        useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({})
                }
                setIsLoading(false);
            });
            return () => unsubscribed;
        }, [])

        const logOut = () => {
            setIsLoading(true);
            signOut(auth)
                .then(() => { })
                .finally(() => setIsLoading(false));
        }

        const handelRegister=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user);
            handleUserInfoRegister(result.user.email);
        })
        .catch((error)=>{
            const errorMessage = error.message;
        })

        }


        const handleUserInfoRegister = (email) => {
            fetch("https://gentle-brushlands-73473.herokuapp.com/addUserInfo", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ email }),
            })
              .then((res) => res.json())
              .then((result) => console.log(result));
        };


        const handelLogin=(email,password)=>{
            signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message});
        };

        


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handelRegister,
        handelLogin
    }
}

export default useFirebase;