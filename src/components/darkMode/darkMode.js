import './darkMode.scss';
import iconMoon from '../../assets/images/icon-moon.svg';
import iconSun from '../../assets/images/icon-sun.svg'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDarkMode, offDarkMode } from '../../redux/darkMode';

function DarkMode() {
  //const [isDarkMode, setIsDarkMode] = useState(true);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode);
  

  const changeMode = () => {
  //   setIsDarkMode(isDarkMode === false)
  //   //done: item.done === true ? false : true,
  // }

  if (isDarkMode) {
        dispatch(offDarkMode());
        document.body.classList.remove("dark");
      } else {
        dispatch(onDarkMode());
        document.body.classList.add("dark");
      }
    };

    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [isDarkMode]);

  return (
    <div className="darkMode">
      <div className="darkMode-icon">
        <button onClick={changeMode}>
        <img 
          src={isDarkMode ? iconSun : iconMoon} 
          alt={isDarkMode ? "icon sun" : "icon moon"} 
          className= {isDarkMode ? "icon sun" : "icon moon"}
        />
        </button>
      </div>
    </div>
  );
}

export default DarkMode;
