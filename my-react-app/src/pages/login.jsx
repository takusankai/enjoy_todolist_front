import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com"; // 実際のGoogleクライアントIDに置き換えてください

function Login() {
    const onSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
        // 成功した場合の処理をここに追加します
        // 例えば、バックエンドサーバーにトークンを送信するなど
    };

    const onFailure = (response) => {
        console.log('Login Failed:', response);
        // 失敗した場合の処理をここに追加します
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} // ユーザーがサインインしている場合、自動的にサインイン状態を維持します
            />
        </div>
    );
}

export default Login;
