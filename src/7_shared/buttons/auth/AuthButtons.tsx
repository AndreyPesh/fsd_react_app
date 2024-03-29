import { Link } from 'react-router-dom';
import { AuthPath } from '1_app/types/enum';

const AuthButtons = (): JSX.Element => {
  return (
    <div className="auth-buttons">
      <Link to={AuthPath.login} className="auth-button-login">
        Войти
      </Link>
      <Link to={AuthPath.sign} className="auth-button-sign">
        Регистрация
      </Link>
    </div>
  );
};

export default AuthButtons;
