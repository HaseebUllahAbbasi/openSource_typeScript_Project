import React, { FC } from "react";
const styleCompleted = { backgroundColor: "ActiveCaption", borderRadius: "15px", color: "whitesmoke" };
const styleIncomplete = { backgroundColor: "turquoise", color: "black", borderRadius: "15px", };

type ToDoItemProps = {
  task: string,
  completed: boolean,
  removeItem: (text: string) => void;
  changeStatus: (text: string, status: boolean) => void;

}
const ToDoItem: FC<ToDoItemProps> = ({ removeItem, changeStatus, task, completed }: ToDoItemProps) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="card my-3" style={{ borderRadius: "15px" }}>
        <div className="card-body" style={completed === true ? styleCompleted : styleIncomplete} >
          <div className="">
            Text : {task}
          </div>
          <div className="">
            Completed : {completed === true ? "✔" : "❌"}
          </div>

        </div>
        <div className="card-footer">
          <div className="d-flex justify-around">
            <button className="btn btn-danger" onClick={() => {
              removeItem(task);
            }}>
              Remove
            </button>
            <button className="btn btn-warning" onClick={() => {
              changeStatus(task, completed)
            }}>
              Change
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default ToDoItem;