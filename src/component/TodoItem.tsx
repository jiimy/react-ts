import React, {useState} from 'react'

type Props = {
  data?: string | boolean;
}

const TodoItem = ({ data }: Props) => {
  const [theArray, setTheArray] = useState(['']);
  if(data !== undefined) {
    // setTheArray([[...theArray, theArray.length]);
    // setTheArray([...theArray, `Entry ${theArray.length}`]);
    console.log('받은 데이터', data)
    
  }
  
  return (
    <>
      {
          // theArray.map((item, index) => {
          //   return (
          //     <li>{theArray}</li>
          // )})
        }
        <li>
          <div className="view" >
            <input className="toggle" type="checkbox" />
            <label> 기본 </label>
            <button className="destroy" ></button>
          </div>
        </li>
    </>
  )
}

export default TodoItem