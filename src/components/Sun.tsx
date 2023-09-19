import React from 'react'

type Props = {
    className: string;
  }

export default function Sun({className}: Props) {
  return (
    <div className={className + '  grid grid-rows-6'}>

        <div className=' row-start-5 w-44 h-44 bg-yellow-200 rounded-full'>
      </div>
    </div>

  )
}
