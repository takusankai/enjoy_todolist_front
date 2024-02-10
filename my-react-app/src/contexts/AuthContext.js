import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Firebase設定を適切なパスでインポート

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); // ローディング状態の追加
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false); // ユーザーの認証状態を確認した後、ローディングを終了
    });

    return unsubscribe; // コンポーネントのアンマウント時にリスナーを解除
  }, []);

  const value = {
    currentUser,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
