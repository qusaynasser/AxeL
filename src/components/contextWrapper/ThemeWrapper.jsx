import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const ThemeBgContext=createContext();

export default function ThemeWrapper({children}) {

    const storage=JSON.parse(localStorage.getItem('theme'));
    const [theme, setTheme] = useState(storage || 'light');//if storge is none use light
    
    
    const handelTheme=()=>
    {
        setTheme((prev)=>prev==='light'?'dark':'light');
    }

    const state=
    {
        theme:theme,
        handelTheme:handelTheme,
    }
    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme));
    },[theme]);

  return (
    <div>
        <ThemeBgContext.Provider value={state}>
            {children}
        </ThemeBgContext.Provider>
    </div>
  )
}
