import React from 'react'

interface InputFileProps{ 
    fileFunc?: ()=> void;
    type: string;

 }

const InputFile:React.FC<InputFileProps> = ({fileFunc, type}) => {
  return (
    <div>
      <input onChange={fileFunc} type={type} />
    </div>
  )
}

export default InputFile
