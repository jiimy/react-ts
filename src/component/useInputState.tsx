/* eslint-disable import/no-anonymous-default-export */
import React, { useState} from 'react'

export default () => { 
  const [value, setValue] = useState('');

  return {
    value, onChange: (event:any) => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  }
}