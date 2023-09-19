import React, { ReactNode } from "react"

type BackgroundProps = {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {

  return (
    <div className="overflow-y-hidden bg-gradient-to-t from-amber-100 
    via-yellow-100 to-rose-300 h-3/5 grid grid-cols-11 grid-rows-2 overflow-x-clip">
      {children}
    </div>
  )
}

export default Background;
