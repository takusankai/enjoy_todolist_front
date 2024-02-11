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
      const key = Math.random().toString(32).substring(2);
      props.onAdd(key, text);
      setText('');
      addDB(key, text, currentUser.uid);
      console.log("add: ", key, text, currentUser.uid);
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

async function addDB(key, text, uid) {

  const getKey = () => Math.random().toString(32).substring(2);
  let send = [];

  // 加えたToDoをサーバーに送信
  // const url = 'http://localhost:5000/add_todo';
  const url = 'https://todo-backend-3jiw.onrender.com/add_todo';
  // dataは'uid'と'todo'を持つjson形式データ
  let data = {uid: uid, todo: text, todo_id: key};
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
    if (data.message) {
      return;
    }
    data.forEach((item) => {
      console.log("item: ", item);
      // 配列sendに追加
      send.push({ key: item.id, text: item.TodoName, done: false });
    });
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

  // fetchが終わるまで待機
  let min=0;
  while (send[1] == null && min < 5) {
    console.log("fetching...");
    // 1秒待機
    await new Promise(resolve => setTimeout(resolve, 1000));
    min=min+1;
  } 
  if (min >= 5) {
    console.log("fetching timeout");
    return "fetching timeout";
  }
  return send;
}

export default InputToDo;
export { addDB };
