import { useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
            {list.map((item) => {
                return <li key={item}>{item}</li>
            })}
            </ul>
            <input placeholder="What is your task?" onChange={(event) => {
              setTask(event.target.value);
            }}
            value={task}
            />
            <button onClick={() => {
                setList([...list, task]);
                setTask("");  
            }}>Add Task</button>
        </div>
    );
};

export default ToDoList;