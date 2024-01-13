"use client"
import Image from "next/image"
import { RxAvatar } from "react-icons/rx"

interface AvatarProps{
    image?: string
}

const Avatar: React.FC<AvatarProps> = ({image}) => {
  return (
    <div>
        {image ? <Image src={image} alt="" fill /> : <Image src={RxAvatar} alt="" fill />  }
    </div>
  )
}

export default Avatar
