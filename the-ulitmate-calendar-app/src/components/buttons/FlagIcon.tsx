import useTopbar from "../../hooks/useTopbar"

type Props = {
  country: string,
  countryLanguage: string
}

const FlagIcon = ({country, countryLanguage}: Props) => {
  const {mode} = useTopbar();
  
  return (
    <img className="topbar-img" src={`./${country}-icon-${mode}.svg`} alt={`The ${countryLanguage} flag icon, used for switching lanuage.`} />
  )
}

export default FlagIcon;