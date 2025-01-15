import useTopbar from "../../hooks/useTopbar";
import TopbarLogic from "../../logic/TopbarLogic";

type Props = {
  language: 'norwegian' | 'english';
}

const LoginLogoutButton = ({language}: Props) => {
  const {status, mode} = useTopbar();
  const {HandleAction} = TopbarLogic();
  return (
    <div className='action-btn' onClick={() => HandleAction()}>
      <img className={`${status}-img`} src={`./${status}-btn-${language}-${mode}.svg`} alt={`The ${mode} version of the ${language} ${status} button.`} />
    </div>
  )
}

export default LoginLogoutButton;