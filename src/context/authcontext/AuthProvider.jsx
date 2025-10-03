import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

const Provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState();

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    };
    const createSign =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,Provider);
    }

    const LogOut = ()=>{
        setLoading(true);
        signOut(auth);
    };

    useEffect(() =>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('state captured',currentUser?.email)

            if(currentUser?.email){
                const user = {email: currentUser.email}

                axios.post('http://localhost:5000/jwt',user,{withCredentials: true})
                .then(res =>{ console.log('login',res.data),
                    setLoading(false);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{},{
                    withCredentials: true
                })
                .then(res =>{console.log('/logout',res.data),
                    setLoading(false);
                })
            }
            setLoading(false);
        })
        return ()=>{
            unSubcribe();
        }
    },[]);
    
    const authInfo ={
        user,
        setLoading,
        createUser,
        createSign,
        googleSignIn,
        LogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;