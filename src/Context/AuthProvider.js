import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase.js';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();

    return (
        <div>
            <AuthContext.Provider value={allContexts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;