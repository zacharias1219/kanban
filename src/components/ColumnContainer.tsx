import { Column } from '../types';

interface Props {
    column: Column;
}

function ColumnContainer(props: Props) {
    const { column } = props;
  return (
    <div className='bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col'>
        <div className='bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p- font-bold border-columnBackgroundColor border-4'>
            {column.title}
        </div>
        <div className='flex flex-grow'>Content</div>
        <div>Footer</div>
    </div>
  )
}

export default ColumnContainer