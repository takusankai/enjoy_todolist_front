import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Firebase設定を適切なパスでインポート

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe; // コンポーネントのアンマウント時にリスナーを解除
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
