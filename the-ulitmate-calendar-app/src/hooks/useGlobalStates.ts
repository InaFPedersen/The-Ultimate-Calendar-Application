import { useState } from "react";

const useGlobalStates = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [lightModeActive, setLightModeActive] = useState<boolean>(true);
  const [activeLanguage, setActiveLanguage] = useState<'norwegian' | 'british' | 'american'>('norwegian');
  const [userName, setUserName] = useState<string>("");
  
  return {
    isAuthenticated, 
    setIsAuthenticated, 
    activeLanguage, 
    setActiveLanguage, 
    userName,
    setUserName,
    lightModeActive,
    setLightModeActive
  }
}

export default useGlobalStates;