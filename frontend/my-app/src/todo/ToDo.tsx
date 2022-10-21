import React, { FC, useState } from 'react';
import ToDoList from './TodoList';
// Typing defaultProps

type ToDoComponentProps = {
  message?: string;
};

type Task = {
  text?: string,
  completed?: boolean
}

// another way to define the component
const Todo: FC<ToDoComponentProps> = ({ message = "This is Default Message" }) => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  // const Todo = ({ message = "This is Default Message" }: AppProps) => {

  return (
    <div className="container-fluid" style={{ height: "100vh", backgroundColor: "lightblue" }}>
      <h1 className=" text-center display-4">
        To Do App

      </h1>
      <p className="container">
        Message: {message}
      </p>
      <div className='container'>
        <div className='container'>
          <input className='form-control' placeholder='Task' value={task} onChange={(e) => {
            setTask(e.target.value);
          }} />
          <button className='btn btn-info' onClick={() => {
            if (task?.trim() === "") {
              return
            }

            setTasks([...tasks, { text: task, completed: false }])
            setTask("")
          }}>
            Add Task
          </button>
        </div>
        {
          JSON.stringify(tasks)
        }
        <ToDoList list={tasks} />
      </div>

    </div>
  )
}
export default Todo;