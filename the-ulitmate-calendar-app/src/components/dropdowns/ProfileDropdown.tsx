import useGlobalStates from "../../hooks/useGlobalStates"
import LoginLogoutButton from "../buttons/LoginLogoutButton";
import Divider from "../various/Divider";

const ProfileDropdown = () => {
  const {userName, activeLanguage, lightModeActive} = useGlobalStates();

  return (
    <div className={`profile-dropdown ${lightModeActive ? 'component-light-mode' : 'component-dark-mode' }`}>
      <div className="user">{userName}</div>
      
      <Divider />

      {lightModeActive ?
      <>
        {activeLanguage === 'norwegian' ?
          <LoginLogoutButton language="norwegian" />
          :
          <LoginLogoutButton language="english" />
        }
      </>
      :
      <>
        {activeLanguage === 'norwegian' ?
          <LoginLogoutButton language="norwegian" />
          :
          <LoginLogoutButton language="english" />
        }
      </>
      }
    </div>
  )
}

export default ProfileDropdown;