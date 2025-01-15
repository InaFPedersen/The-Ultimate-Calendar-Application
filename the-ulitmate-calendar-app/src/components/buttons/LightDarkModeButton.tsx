import useTopbar from "../../hooks/useTopbar";

const LightDarkModeIcon = () => {
  const {mode} = useTopbar();
  
  return (
    <img className="topbar-img" src={`./dark-light-icon-${mode}.svg`} alt={`Light and dark mode icon, used for switching between light and dark mode on the application.`} />
  )
}

export default LightDarkModeIcon