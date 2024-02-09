// src/components/SignIn.js
import React from 'react';
import { auth } from '../../firebase'; // 適切なパスでインポート
import firebase from '../..//firebase/app';

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    // Google アカウントでのログイン成功
    console.log(result.user);
  }).catch((error) => {
    // エラー処理
    console.error(error);
  });
};

function SignIn() {
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

export default SignIn;
