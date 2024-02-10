import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { useAuth } from '../../contexts/AuthContext';

export const InputToDo = (props) => {
  
  // stateを作成
  const [text, setText] = useState('');

  const { currentUser } = useAuth();

  //入力値をtextに反映
  const handleChange = e => setText(e.target.value);
  // Enter押下時、ToDoに追加
  const handleEnter = e => {
    if (e.key === 'Enter') {
      // 入力値が空白文字の場合終了
      if (!text.match(/\S/g) ) return;
      // ToDoAppクラスの「handleAdd」関数を実行
      props.onAdd(text);
      setText('');
      addDB(text, currentUser.uid);
      console.log(currentUser.uid);
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
    </div>
  );
}

async function addDB(text, uid) {

  const getKey = () => Math.random().toString(32).substring(2);
  let send = [];

  // 加えたToDoをサーバーに送信
  // const url = 'http://localhost:5001/add_todo';
  const url = 'https://todo-backend-3jiw.onrender.com/add_todo';
  // dataは'uid'と'todo'を持つjson形式データ
  let data = {uid: uid, todo: text};
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("受け取ったdata: ", data);
    // data１つ１つに処理
    data.forEach((item) => {
      console.log(item.TodoName);
      // 配列sendに追加
      send.push({ key: getKey(), text: item.TodoName, done: false });
    });
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

  // fetchが終わるまで待機
  while (send[1] == null) {
    console.log("fetching...");
    // 1秒待機
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return send;
}

export default InputToDo;
export { addDB };
