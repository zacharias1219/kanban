import PlusIcon from "../icons/PlusIcon"
import { useState } from "react";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);
  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center overflow-x-auto overflow-y-hidden px=[40px]"> 
        <div className="m-auto flex gap-4">
        <div className="flex gap-2">{columns.map((col) => (<ColumnContainer column={col} />))}</div>
            <button onClick={() => { createNewColumn();}} className="flex gap-2 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2">
                <PlusIcon/>Add Column
            </button>
        </div>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
        id: generateId(),
        title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
}

function generateId() {
    return Math.floor(Math.random() * 10001);
}

export default KanbanBoard