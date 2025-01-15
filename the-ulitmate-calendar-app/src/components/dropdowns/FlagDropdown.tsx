
import useGlobalStates from "../../hooks/useGlobalStates";
import FlagButton from "../buttons/FlagButton";
import Divider from "../various/Divider";

const FlagDropdown = () => {
  const {lightModeActive} = useGlobalStates();

  return (
    <div className={`flag-dropdown ${lightModeActive ? 'component-light-mode' : 'component-dark-mode' }`}>
      {lightModeActive ? 
        <>
          <FlagButton country={"norway"} countryLanguage={"norwegian"} countryName={"Norway"} mode={"light"} />

          <Divider />

          <FlagButton country={"united-kingdom"} countryLanguage={"british"} countryName={"United Kingdom"} mode={"light"} />

          <Divider />

          <FlagButton country={"united-states"} countryLanguage={"american"} countryName={"United States"} mode={"light"} />
        </>
        :
        <>
          <FlagButton country={"norway"} countryLanguage={"norwegian"} countryName={"Norway"} mode={"dark"} />

          <Divider />

          <FlagButton country={"united-kingdom"} countryLanguage={"british"} countryName={"United Kingdom"} mode={"dark"} />

          <Divider />

          <FlagButton country={"united-states"} countryLanguage={"american"} countryName={"United States"} mode={"dark"} />
        </>
      }
    </div>
  )
}

export default FlagDropdown