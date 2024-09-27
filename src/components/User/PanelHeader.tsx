import React from 'react'
import Avatar from '../Avatar'

interface PanelHeaderProps {
    srcImg: string
    author: string
    publishDate: string
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ srcImg, author, publishDate }) => {
    return (
        <div className='panel-header flex flex-row justify-start mt-5 gap-5'>
            <Avatar
                srcImg='../public/assets/1.jpg'
                alt='avatar'
                classname='w-[67px] h-[67px]'
            />
            <div className="flex flex-col">
                <p className="text-xl font-blod text-blue-500">{author}</p>
                <p className="text-xl text-blue text-black">
                    {publishDate}
                </p>
            </div>
        </div>
    )
}

export default PanelHeader
