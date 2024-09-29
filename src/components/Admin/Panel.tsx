import React from 'react'

interface PanelProps {
  srcUrl: string
  Text: string
}

const Panel: React.FC<PanelProps> = ({ srcUrl, Text }) => {
  return (
    <div className="flex max-[992px]:flex-col max-[992px]:justify-center max-[992px]:mt-2 rounded-lg shadow-3xl p-6 sm:mx-4 lg:mx-8 sm:items-center">
      <div className="flex p-2 justify-center md:w-[520px] md:h-[300px] items-center ml-4 rounded-2xl bg-[#aaaaaa33] mx-5 shadow-3xl">
        <div className="flex justify-center rounded-lg h-full aspect-videoitems-center bg-card-bg outline-2 shadow-card-upload-black shadow-3xl">
          <img
            className="h-full object-cover object-center rounded-lg"
            src={srcUrl}
            alt="panel image"
          />
        </div>
      </div>
      <div className="flex sm:w-2/3 max-[992px]:mt-5 max-[992px]:justify-center max-[992px]:items-center">
        <p className="">{Text}</p>
      </div>
    </div>
  )
}

export default Panel
