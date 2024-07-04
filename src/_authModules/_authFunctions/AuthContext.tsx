"use client";

import React, { ReactNode, useContext, useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User
} from 'firebase/auth';
import firebase_app from '../config';
import { PropagateLoader } from 'react-spinners';

const auth = getAuth(firebase_app);
interface AuthContextType {
    user: User | null;
}
export const AuthContext = React.createContext<AuthContextType>({ user: null });
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user.email);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PropagateLoader />
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
