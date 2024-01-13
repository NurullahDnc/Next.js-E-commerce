import React from "react"

interface HeadingProps{
    center?: boolean,
    text?: string
}

const Heading:React.FC<HeadingProps> = ({center, text}) => {
  return (
    <div className={` my-3 md:my-10 px-3 md:px-10 md:text-2xl ${center?"text-center": "text-start" } ` }>
      {text}
    </div>
  )
}

export default Heading
