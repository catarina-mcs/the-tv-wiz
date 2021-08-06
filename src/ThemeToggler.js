import {useState, useEffect} from 'react';
import tvLightTheme from './images/tv-light-theme.png';
import tvDarkTheme from './images/tv-dark-theme.png';

function ThemeToggler() {

    const [theme, setTheme] = useState('light-theme');
    
    function toggleTheme() {
        
        const lightIcon = document.getElementById('light');
        const darkIcon = document.getElementById('dark');
        if (theme === 'light-theme') {
            setTheme('dark-theme');
            lightIcon.classList.remove('theme-icon-active');
            darkIcon.classList.add('theme-icon-active');
            
        } else if (theme === 'dark-theme') {
            setTheme('light-theme');
            darkIcon.classList.remove('theme-icon-active');
            lightIcon.classList.add('theme-icon-active');
            
        }
    }

    useEffect(() => {
        document.documentElement.className = theme;
       
        const tv = document.getElementById('tv');

        if (theme === 'light-theme') tv.setAttribute('src', tvLightTheme);
        if (theme === 'dark-theme') tv.setAttribute('src', tvDarkTheme);
    }, [theme])

    return (
        <div className='toggle' id='toggle' onClick={toggleTheme}>
            <div className='theme-icon theme-icon-active' id='light'>☼</div>
            <div className='theme-icon' id='dark'>☾</div>
        </div>
    )
}

export default ThemeToggler;