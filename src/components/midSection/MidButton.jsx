import React from 'react'

export default function MidButton({buttons,filter,selected}) {
  return (
    <div className='flex items-center pt-8'>
        {buttons.map((btn)=>{
            return(
                <button 
                key={btn.id}
                className={selected && 'pushable sm:mr-4'}
                onClick={()=>filter(btn.id)}>

                    <span className={selected===btn.id? 'front2':'front'}>{btn.name}</span>
                </button>
            );
        })}
    </div>
  )
}
