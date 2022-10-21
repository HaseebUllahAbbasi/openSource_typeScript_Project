import React, { FC, useState } from 'react'
import ToDoItem from './ToDoItem'
type Task = {
  text?: string,
  completed?: boolean
}

type ToDoListProps = {
  message?: string,
  list: Task[]
}
const ToDoList: FC<ToDoListProps> = ({ message = "This is default message for To Do List Props", list }: ToDoListProps) => {
  const changeStatus = (text: string, status: boolean) => {
    alert("change Status with value : " + text);
    setTasks([...tasks]);
  }
  const removeItem = (text: string) => {
    alert("remove Item : " + text);
    setTasks([...tasks]);

  }

  const [tasks, setTasks] = useState<Task[]>([...list]);

  return (
    <div className='container' style={{ backgroundColor: "Background" }}>
      <div className='display-5'>
        Tasks
        {
          JSON.stringify(tasks)
        }
      </div>
      <div className='items'>
        {
          tasks.length === 0 ? <div className='display-6'>
            No Tasks </div> :
            tasks.map((item, key) => <ToDoItem text={item.text} completed={item.completed} removeItem={removeItem} changeStatus={changeStatus} />)
        }
      </div>
    </div>

  )
}
export default ToDoList;
ToDoList.displayName = "Display Name for To Do List ";