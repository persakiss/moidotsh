import React, { ReactNode } from "react"

type SunProps = {
  children: ReactNode;
}

const Sun = ({ children }: SunProps) => {

  return (
    <div className="bg-gradient-to-t from-amber-100 via-yellow-100 to-rose-300 h-3/5 grid grid-cols-6 grid-rows-2">
      {children}
    </div>
  )
}

export default Sun;
