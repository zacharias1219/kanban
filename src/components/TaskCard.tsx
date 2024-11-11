import { useState } from 'react';
import TrashIcon from '../icons/TrashIcon';
import { Task, Id } from '../types';

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div className='bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab' onMouseEnter={() => { setMouseIsOver(true);}} onMouseLeave={() => {setMouseIsOver(false);}}>
      {task.content}
      {mouseIsOver && (<button onClick={() => {deleteTask(task.id);}} className='stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100'><TrashIcon/></button>)}
    </div>
  )
}

export default TaskCard