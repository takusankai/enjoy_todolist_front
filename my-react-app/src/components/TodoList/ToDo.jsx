import classNames from 'classnames';
import 'bulma/css/bulma.css';
export const ToDo = (props) => {
  // stateを作成
  const { todo, onCheck, onDelete } = props;
  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
    console.log("change: ", todo.key, todo);
    achievementDB(todo.key); // 達成をサーバーに送信
  };
  
  const handleDelete = () => {
    onDelete(todo.key);
    console.log("delete: ", todo.key, todo);
  };
  return (
    <label className="panel-block">
      <button class="mini ui button" onClick={handleDelete}>
        削除
      </button>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        })}
      >
        {todo.text}
      </span>
    </label>
  );
}
export default ToDo;

async function achievementDB(todo_id) {

  console.log("achievementDB: ", todo_id);
  // 達成をToDoをサーバーに送信
  const url = 'http://localhost:5001/achieve_todo';
  // dataは'uid'と'todo'を持つjson形式データ
  let data = {todo_id: todo_id};
  fetch(url, {
    method: 'PUT',
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
    console.log("受け取ったdata: ", data); //使わないメッセージが来る
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

  return; // 何も返さない、serverに送信するだけ
}
