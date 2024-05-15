import React, { useEffect, useState } from 'react'
import GlobalContext from './context'

const GlobalProvider = ({children}) => {
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  let savedMode = localStorage.getItem("displayMode");
  if(!savedMode) {
    savedMode = "light"
    setDarkMode(false)
    localStorage.setItem("displayMode", savedMode);
  } else {
    setDarkMode(savedMode==="dark"? true:false)
  }
}, []);

const data = {darkMode, setDarkMode}
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider