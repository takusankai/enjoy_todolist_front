import React from 'react';
import './Home.css';
import { useAuth } from '../contexts/AuthContext';

function Home() {
  const { currentUser } = useAuth(); // 現在のユーザー情報を取得

  return (
    <div className='Home'>
      {currentUser ? (
        <React.Fragment>
      <h1>TodoList</h1>
      {/* 現在のユーザー情報を表示 */}
        <div>
          <p>ログイン中のユーザー: {currentUser.displayName}</p>
          <p>ログイン中のメールアドレス: {currentUser.email}</p>
        </div>
      
      <p>スクロール確認ああああああああああああああああああああああああああああああああああああああああ</p>
      <p>スクロール確認ああああああああああああああああああああああああああああああああああああああああ</p>
      <p>スクロール確認ああああああああああああああああああああああああああああああああああああああああ</p>
      </React.Fragment>
      ):(
        <p>ログインして下さい！</p>
      )}
    </div>
  )
}

export default Home;