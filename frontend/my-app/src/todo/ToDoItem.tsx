import React, { FC } from "react";
type ToDoItemProps = {
  text?: string,
  completed?: boolean,
  removeItem: (text: string) => void;
  changeStatus: (text: string, status: boolean) => void;

}
const ToDoItem: FC<ToDoItemProps> = (ToDoItemProps) => {
  return (
    <div className="card">
      {
        JSON.stringify(ToDoItemProps)
      }
    </div>
  )
}
export default ToDoItem;