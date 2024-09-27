import React from 'react'

interface PanelContentProps {
    pContent: string
}

const PanelContent: React.FC<PanelContentProps> = ({pContent}) => {
  return (
    <div className='panel-content mt-5'>
        <p>
            {pContent}
        </p>
    </div>
  )
}

export default PanelContent