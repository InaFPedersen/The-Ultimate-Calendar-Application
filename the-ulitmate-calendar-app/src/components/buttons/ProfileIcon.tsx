import useTopbar from "../../hooks/useTopbar";

const ProfileIcon = () => {
  const {mode, profileIconColor, profileIconName, profileStatus } = useTopbar();

  return (
   <img className="topbar-img" src={`./${profileIconName}-icon-${mode}.svg`} alt={`Profile icon, with ${profileIconColor} color symbolising that the user is ${profileStatus}`} />   
  )
}

export default ProfileIcon;