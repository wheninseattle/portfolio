import React from 'react'

const JobTab = ({className,company,onClick,}) => {
  return (
    <div onClick={onClick} className={className}>{company}</div>
  )
}

export default JobTab