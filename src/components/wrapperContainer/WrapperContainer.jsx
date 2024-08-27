import React from 'react'

export default function WrapperContainer({navHed,children}) {
    console.log(children);
  return (
    <div className={!navHed? "container mx-auto px-4 bg-wrapperBg h-full w-full bg-cover bg-no-repeat bg-center rounded-xl "
        :"container mx-auto px-4"
    }>
        {children}
    </div>
  )
}
