import useTopbar from "../../hooks/useTopbar";

const Logo = () => {
  const { mode} = useTopbar();

  return (
    <div className="logo">
      <img className="topbar-img" src={`./logo-fictional-icon-${mode}.svg`} alt={`Image of the Holiday application's logo in ${mode} version.`}  />
    </div>
    
  )
}

export default Logo;