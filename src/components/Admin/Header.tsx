import React from 'react'
import Button from '../Button'
import Avatar from '../Avatar'

interface HeaderProps {
  srcUrl: string
  alt: string
  author: string
  newsTitle: string
}

const Header: React.FC<HeaderProps> = ({ srcUrl, alt, author, newsTitle }) => {
  return (
    <div className="flex justify-center items-center w-full mx-[8px] mb-5">
      <div className="flex p-2 justify-center md:items-start items-center ml-4 rounded-full bg-[#aaaaaa33] mx-5 shadow-3xl">
        <div className="rounded-lg h-full flex justify-center items-center bg-card-bg border-gray-500">
          <Avatar 
            srcImg={srcUrl}
            alt={`Avatar: ${alt}`}
            classname='shadow-3xl'
            />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-blod font-black">Author Name : {author}</p>
        <p className="text-xl text-blue text-blue-700">
          NewsTitle : {newsTitle}
        </p>
      </div>
    </div>
  )
}

export default Header
