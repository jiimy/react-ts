import React, {useState, useEffect} from 'react'

type Props = {
  data?: (value: string) => void;
}

const TodoItem = ({ data }: Props) => {
  const [theArray, setTheArray] = useState(['']);

  useEffect(() => {
    console.log('받은 데이터', data)
  })

  if(data !== undefined) {
    // setTheArray([[...theArray, theArray.length]);
    // setTheArray([...theArray, `Entry ${theArray.length}`]);
    
    
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