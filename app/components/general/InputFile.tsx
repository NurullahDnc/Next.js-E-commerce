import React from 'react'

interface InputFileProps{ 
    fileFunc?: ()=> void;

 }

const InputFile:React.FC<InputFileProps> = ({fileFunc}) => {
  return (
    <div>
      <input onChange={fileFunc} type="file" />
    </div>
  )
}

export default InputFile
