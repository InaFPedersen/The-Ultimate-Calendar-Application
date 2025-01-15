import useGlobalStates from "../../hooks/useGlobalStates";
import useTopbar from "../../hooks/useTopbar";
import TopbarLogic from "../../logic/TopbarLogic";
import FlagIcon from "../buttons/FlagIcon";
import LightDarkModeIcon from "../buttons/LightDarkModeButton";
import ProfileIcon from "../buttons/ProfileIcon";
import FlagDropdown from "../dropdowns/FlagDropdown";
import ProfileDropdown from "../dropdowns/ProfileDropdown";
import Logo from "./Logo";
import "./../../style/topbar.css"

const Topbar = () => {
  const { activeLanguage  } = useGlobalStates();
  const {flagOpen, profileOpen} = useTopbar();
  const {ToggleFlagOpen, ToggleLightDark, ToggleProfileOpen} = TopbarLogic();

  return (
    <div className='topbar-container'>
      <div className='topbar'>
        <div className='topbar-left'>
          <Logo />
          <div className='app-title'>
            {activeLanguage === 'norwegian' ? 
              <h1>Ferie appligasjonen</h1> 
              : 
              <h1>The Holiday application</h1>
            }
          </div>
        </div>

        <div className="topbar-right">
          <div className="light-dark-mode" onClick={() => ToggleLightDark}>
            <LightDarkModeIcon />
          </div>

          <div className="language-flag" onClick={() => ToggleFlagOpen}>
            {activeLanguage === "norwegian" && 
              <FlagIcon country={"norway"} countryLanguage={"norwegian"} />
            }
            {activeLanguage === "british" && 
              <FlagIcon country={"united-kingdom"} countryLanguage={"british"}/>
            }
            {activeLanguage === "american" && 
              <FlagIcon country={"united-states"} countryLanguage={"american"}/>
            }
          </div>

          <div className="profile" onClick={() => ToggleProfileOpen}>
            <ProfileIcon /> 
          </div>
        </div>
      </div> 
      {flagOpen && <FlagDropdown />}
      {profileOpen && <ProfileDropdown />}
    </div>
  )
 
}

export default Topbar;