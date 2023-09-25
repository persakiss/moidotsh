import React from 'react'
import { Globe } from 'react-feather'

type Props = {
    url: string;
}

function BrowserAppAddressBar({url}: Props) {
  return (
    <span className='flex h-7  border-t-2 border-r-2 border-b-2'><span className=' border-l-2'><Globe size={18} className='ml-2 mt-1 mr-1 z-[200]'/></span><input className='w-full   border-r-0 pl-2' placeholder={`https://www.moi.sh/${url}.tsx`} /></span>
  )
}

export default BrowserAppAddressBar