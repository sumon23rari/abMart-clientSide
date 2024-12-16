import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const ThemeContext=createContext();
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState(
        // localStorage.getItem('theme') || 'light'
    );
    useEffect(()=>{
const root=document.documentElement;
if (theme==='dark') {
    root.classList.add('dark')
}
else{
    root.classList.remove('dark')
}
localStorage.setItem('theme',theme)
    },[theme])
    const toggleTheme = () =>
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;