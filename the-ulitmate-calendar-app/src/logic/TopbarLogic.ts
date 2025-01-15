import { useNavigate } from "react-router";
import useGlobalStates from "../hooks/useGlobalStates";
import useTopbar from "../hooks/useTopbar";

const TopbarLogic = () => {

  const {flagOpen, profileOpen, setProfileOpen, setFlagOpen, status} = useTopbar();
  const {lightModeActive, setLightModeActive, setActiveLanguage, setIsAuthenticated, setUserName} = useGlobalStates();
  const navigate = useNavigate();

  const HandleAction = () => {
    if (status === 'login'){
      navigate('/');
    } 
    if(status === 'logout') {
      // Logout user - send logout request
      setIsAuthenticated(false);
      setUserName('');
      
      navigate('/')
    }

    setProfileOpen(false);
  }

  const ToggleLightDark = () => {
    setLightModeActive(!lightModeActive);
  }

  const ChangeLanguage = (language: "norwegian" | "british" | "american") => {
      setActiveLanguage(language);
      setFlagOpen(false);
  }

  const ToggleFlagOpen = () => {
    setFlagOpen(!flagOpen);
  }

  const ToggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  }

  return {
    ChangeLanguage,
    ToggleFlagOpen,
    ToggleLightDark,
    ToggleProfileOpen,
    HandleAction
  }
  
}

export default TopbarLogic;