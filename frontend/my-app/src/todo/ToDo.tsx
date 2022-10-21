import React, { FC, useState } from 'react';
import ToDoList from './TodoList';

// Typing defaultProps

type ToDoComponentProps = {
  message?: string;
};

type Task = {
  text: string,
  completed: boolean
}


// const Todo = ({ message = "This is Default Message" }: AppProps) => {

// another way to define the component

const Todo: FC<ToDoComponentProps> = ({ message = "This is Default Message" }) => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const changeStatus = (text: string, status: boolean) => {
    const updated = tasks.filter(item => item.text !== text);
    updated.unshift(({ text: text, completed: !status }));
    setTasks([...updated])
  }
  const removeItem = (text: string) => {
    alert("remove Item : " + text);
    // setTasks([...tasks]);
  }

  return (
    <div className="container-fluid" style={{ height: "100vh", backgroundColor: "lightblue" }}>
      <h1 className=" text-center display-4">
        To Do App

      </h1>
      <p className="container">
        Message: {message}
      </p>
      <div className='container'>

        <ToDoList list={tasks} removeItem={removeItem} changeStatus={changeStatus} />
      </div>
      <div className='container mt-5'>
        <input className='form-control' style={{ display: "inline-block", width: "80%" }} placeholder='Task' value={task} onChange={(e) => {
          setTask(e.target.value);
        }} />
        <button className='btn btn-info mx-3' onClick={() => {
          if (task?.trim() === "") {
            return
          }

          setTasks([...tasks, { text: task, completed: false }])
          setTask("")
        }}>
          Add Task
        </button>

      </div>
    </div>
  )
}
export default Todo;