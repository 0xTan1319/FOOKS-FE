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
      className={`rounded-full w-[100px] h-[100px] md:w-[134px] md:h-[134px] ${classname}`}
    />
  )
}

export default Avatar
