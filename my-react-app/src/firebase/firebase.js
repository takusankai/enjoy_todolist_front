import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

// Firebase アプリの初期化
const app = initializeApp(firebaseConfig);

export default app;