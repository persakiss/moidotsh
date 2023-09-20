// Sun.tsx

import React from 'react'
import { theme } from '@/styles/themes'

type Props = {
    className: string;
  }

export default function Sun({className}: Props) {
return (
    <div className={className + '  grid grid-rows-6'}>
        <div className=' row-start-5 w-44 h-44 rounded-full' style={{backgroundColor: theme.sunColor}}>
      </div>
    </div>
  )
}
