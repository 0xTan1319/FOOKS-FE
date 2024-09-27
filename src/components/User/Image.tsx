import React from 'react'

interface ImageProps {
    srcUrl: string
    alt: string
    classname: string
}

const Image: React.FC<ImageProps> = ({srcUrl, alt, classname}) => {
  return (
    <img 
        src={srcUrl}
        alt={alt} 
        className={`w-full ${classname}`}    
    />
  )
}

export default Image