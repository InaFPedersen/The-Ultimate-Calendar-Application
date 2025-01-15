
import { useEffect, useState, createContext } from "react";
import useGlobalStates from "./useGlobalStates";

/// Her bør du lese om useReeduser!!!
// reactContext

const useTopbar = () => {
  const [country, setCountry] = useState<'norway' | 'united-kingdom' | 'united-states'>('norway');
  const [countryLanguage, setCountryLanguage] = useState<'norwegian' | 'british' | 'american'>('norwegian');
  const [countryName, setCountryName] = useState<'Norway' | 'United Kingdom' | 'United States'>('Norway');
  const [flagOpen, setFlagOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'norwegian' | 'english'>('norwegian');
  const [status, setStatus] = useState<'login' | 'logout'>('login');
  const [profileIconName, setProfileIconName] = useState<'logged-in-profile' | 'profile'>('profile');
  const [profileIconColor, setProfileIconColor] = useState<'green' | 'black and white'>('black and white');
  const [profileStatus, setProfileStatus] = useState<'logged in' | 'not logged in'>('not logged in');

  const {activeLanguage, isAuthenticated, lightModeActive} = useGlobalStates();
  
  useEffect(() => {
    if (lightModeActive) {
      setMode('light')
    } 
    if (!lightModeActive) {
      setMode('dark')
    }

    if (isAuthenticated) {
      setProfileIconName('logged-in-profile');
      setProfileIconColor('green');
      setProfileStatus('logged in');
      setStatus('logout');

    }
    else {
      setProfileIconName('profile');
      setProfileIconColor('black and white');
      setProfileStatus('not logged in');
      setStatus('login');
    }
  }, [])
  

  if (activeLanguage === 'norwegian') {() => setCountry('norway')};
  if (activeLanguage === 'american') {() => setCountry('united-states')};
  if (activeLanguage === 'british') {() => setCountry('united-kingdom')};


  if (activeLanguage === 'norwegian') {() => setCountry('norway')};
  if (activeLanguage === 'american') {() => setCountry('united-states')};
  if (activeLanguage === 'british') {() => setCountry('united-kingdom')};


  return {
    flagOpen,
    setFlagOpen,
    profileOpen,
    setProfileOpen,
    country,
    setCountry,
    countryLanguage,
    setCountryLanguage,
    countryName,
    setCountryName,
    mode,
    setMode,
    language,
    setLanguage,
    status,
    setStatus,
    profileIconName,
    setProfileIconName,
    profileIconColor,
    setProfileIconColor,
    profileStatus,
    setProfileStatus   
  }
}

export default useTopbar;

