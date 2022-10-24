import React, { FC } from 'react'
import ToDoItem from './ToDoItem'
type Task = {
  text: string,
  completed: boolean
}

type ToDoListProps = {
  message?: string,
  list: Task[],
  removeItem: (text: string) => void;
  changeStatus: (text: string, status: boolean) => void;
}
const ToDoList: FC<ToDoListProps> = ({ list, removeItem, changeStatus }: ToDoListProps) => {



  return (
    <div className='container' style={{ backgroundColor: "Background", borderRadius: "10px" }}>
      <div className='display-5'>
        Tasks

      </div>
      <div className='items row'>
        {
          list.length === 0 ? <div className='display-6'>
            No Tasks </div> :
            list.map((item, key) => <ToDoItem key={key} task={item.text} completed={item.completed} removeItem={removeItem} changeStatus={changeStatus} />)
        }
      </div>
    </div>

  )
}
export default ToDoList;
ToDoList.displayName = "Display Name for To Do List ";