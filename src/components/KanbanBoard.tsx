import PlusIcon from "../icons/PlusIcon"
import { useMemo, useState } from "react";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragOverlay, DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  console.log(columns);
  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center overflow-x-auto overflow-y-hidden px=[40px]"> 
        <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="m-auto flex gap-4">
        <div className="flex gap-2">
          <SortableContext items={columnsId}>
          {columns.map((col) => (<ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />))}
          </SortableContext>
          </div>
            <button onClick={() => { createNewColumn();}} className="flex gap-2 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2">
                <PlusIcon/>Add Column
            </button>
        </div>
        
        {/* {createPortal(<DragOverlay>
          {activeColumn && <ColumnContainer column={activeColumn} deleteColumn={deleteColumn}/>}
        </DragOverlay>, document.body)} */}
        </DndContext>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
        id: generateId(),
        title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function onDragStart(event: DragStartEvent) {
    console.log(event);
    if(event.active.data.current?.type === "Column") {
      const column = event.active.data.current.column;
      setActiveColumn(column);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
  }
}

function generateId() {
    return Math.floor(Math.random() * 10001);
}

export default KanbanBoard