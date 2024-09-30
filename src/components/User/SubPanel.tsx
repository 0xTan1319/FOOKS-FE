import React from 'react'
import Image from './Image'

interface SubPanelProps {
  imgUrl: string
  alt: string
  panelTitle: string
  panelContent: string
  date: string
}

const SubPanel: React.FC<SubPanelProps> = ({
  imgUrl,
  alt,
  panelTitle,
  panelContent,
  date
}) => {
  return (
    <div className="flex flex-col mt-5 border rounded-xl p-2 w-1/2">
      <Image srcUrl={imgUrl} alt={`sub-panel ${alt}`} classname="rounded-xl" />
      <p className="panel-title text-blue-700 text-2xl py-2">{panelTitle}</p>
      <p className="panel-conten text-black text-lg py-2">{panelContent}</p>
      <p className="date font-bold text-2xl">{date}</p>
    </div>
  )
}

export default SubPanel
