import { useState } from "react";

const useGlobalStates = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [activeLanguage, setActiveLanguage] = useState<'norwegian' | 'british' | 'american'>('norwegian')

  return {
    isAuthenticated, setIsAuthenticated, activeLanguage, setActiveLanguage
  }
}

export default useGlobalStates;