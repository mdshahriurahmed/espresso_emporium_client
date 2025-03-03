
import { createContext, useEffect, useState } from 'react';
import auth from '../Component/firebaseconfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const EspressoContext = createContext(null);
const Context = ({ children }) => {
    const navigate = useNavigate();
    const [newuser, setUser] = useState(null)
    useEffect(() => {
        const observer = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        return () => observer();
    }, [])


    const handleRegisterwithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const processSignOut = () => {
        return signOut(auth).then(() => {
            setUser(null);
            navigate('/')
            toast.success('SignOut successfully!');
            // Sign-out successful.
        }).catch((error) => {
            toast.error(error.message);
        });
    }


    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate('/dashboard')
                // ...
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }
    const data = {
        handleRegisterwithEmail,
        newuser,
        processSignOut,
        processLogin
    }
    return (
        <EspressoContext.Provider value={data}>
            {children}

        </EspressoContext.Provider>
    );
};

export default Context;
