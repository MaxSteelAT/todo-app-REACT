import './darkMode.scss';
import iconMoon from '../../assets/images/icon-moon.svg';
import iconSun from '../../assets/images/icon-sun.svg'
import { useState, useEffect } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeMode = () => {
    setIsDarkMode(isDarkMode === false)
    //done: item.done === true ? false : true,
  }
  return (
    <div className="darkMode">
      <div className="darkMode-icon">
        <button onClick={changeMode}>
        <img 
          src={isDarkMode ? iconMoon : iconSun} 
          alt={isDarkMode ? "icon moon" : "icon sun"} 
          className="icon-moon icon-sun"
        />
        </button>
      </div>
    </div>
  );
}

export default DarkMode;
