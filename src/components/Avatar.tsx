import React from 'react'

interface AvatarProps {
    srcImg: string
    alt: string
    classname: string
}

const Avatar: React.FC<AvatarProps> = ({ srcImg, alt, classname }) => {
  return (
    <img 
        src={srcImg} 
        alt={alt} 
        className={`rounded-full w-[134px] h-[134px] ${classname}`} 
    />
  )
}

export default Avatar