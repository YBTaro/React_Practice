import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password) // this is a promise
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password) // this is a promise
    }

    const logout = () => {
        return auth.signOut() // this is a promise
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email) // this is a promise
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email) // this is a promise
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password) // this is a promise
    }



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


