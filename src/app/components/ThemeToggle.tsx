'use client';
import {  useEffect, useState } from 'react';

export default function ThemeToggle(){
    const [isDark, setIsDark] = useState(false)
    
    useEffect(() => {
        const html = document.documentElement;
        const stored = localStorage.getItem('theme');
        if (stored === 'dart') {
            html.classList.add('dark');
            setIsDark(true);
        }
    }, []);
    
    const toggleTheme = () => {
        const html = document.documentElement;
        if(html.classList.contains('dark')){
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false)
        }else{
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };
    
    return (
      <button onClick={toggleTheme} className="ml-4">
        {isDark ? '☀️' : '🌙'}
      </button>  
    );
}