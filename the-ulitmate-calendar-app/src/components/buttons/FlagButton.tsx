
import TopbarLogic from "../../logic/TopbarLogic";

type Props = {
  country: string,
  countryLanguage: 'norwegian' | 'british' | 'american',
  countryName: string,
  mode: string
}

const FlagButton = ({country, countryLanguage, countryName, mode}: Props) => {
  const {ChangeLanguage} = TopbarLogic();

  return (
    <div className={country} onClick={() => ChangeLanguage(countryLanguage)}>
      <img className="topbar-img" src={`./${country}-icon-${mode}.svg`} alt={`Flag of ${countryName}`} />
    </div>
  )
}

export default FlagButton;