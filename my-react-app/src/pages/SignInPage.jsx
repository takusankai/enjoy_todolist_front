import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '../firebase/firebaseConfig'; // パスはプロジェクト構造に応じて調整

const SignInPage = () => {
  const [user, setUser] = useState(null); // ユーザー状態を管理するためのステート

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // ユーザーがログインしている場合
        console.log('ログイン済み:', currentUser);
        setUser(currentUser);
      } else {
        // ユーザーがログアウトしている場合
        console.log('未ログイン');
        setUser(null);
      }
    });

    // コンポーネントのアンマウント時にリスナーを解除
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google アカウントでのログイン成功時の処理
        console.log('ログイン成功:', result.user);
        setUser(result.user);
      })
      .catch((error) => {
        // エラー処理
        console.error('ログインエラー:', error);
      });
  };

  return (
    <div className='SignInPage'>
      <h2>サインインページ</h2>
      {user ? (
        <div>
          <p>こんにちは, {user.displayName}!</p>
          <button onClick={() => getAuth(firebaseApp).signOut()}>ログアウト</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Google でサインイン</button>
      )}
    </div>
  );
};

export default SignInPage;
