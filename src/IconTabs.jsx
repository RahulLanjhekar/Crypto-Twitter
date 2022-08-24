import React from 'react'

const IconTabs = ({Icon, text}) => {
  return (
    <div className="left-tabs">
            <Icon sx={{fontSize: '35px'}}/>
            <h3>{text}</h3>
    </div>
  )
}

export default IconTabs