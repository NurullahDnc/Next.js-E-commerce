import React from "react"

interface HeadingProps{
    center?: boolean,
    text?: string
}

const Heading:React.FC<HeadingProps> = ({center, text}) => {
  return (
    <div className={` my-5 md:my-12 px-3 md:px-10 md:text-2xl ${center?"text-center": "text-start" } ` }>
      {text}
    </div>
  )
}

export default Heading
