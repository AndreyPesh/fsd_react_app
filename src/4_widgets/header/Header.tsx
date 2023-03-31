import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Links } from '1_app/types/enum';
import useAuth from '2_processes/auth/hooks/useAuth';
import Navigation from '5_features/navigation/Navigation';
import SwitchLang from '5_features/switchLang/SwitchLang';
import Search from '5_features/search/Search';
import UserManagement from '5_features/userManagement/UserManagement';
import Burger from '5_features/burger/Burger';
import { NAME_CLASS_ACTIVE_BURGER } from '5_features/burger/constants';
import { addRemoveClassToBody } from '5_features/burger/helpers';
import AuthButtons from '7_shared/buttons/auth/AuthButtons';

const Header = (): JSX.Element => {
  const isAuth = useAuth();
  const [activeClass, setActiveClass] = useState(false);

  const burgerHandler = () => {
    setActiveClass((prevState) => !prevState);
    addRemoveClassToBody(activeClass);
  };

  return (
    <header className="header">
      <Link to={Links.main} className="header__link">
        <h1 className="header__brand">LeaApp</h1>
      </Link>
      <div
        className={`header__content ${activeClass ? NAME_CLASS_ACTIVE_BURGER : ''}`}
        onClick={burgerHandler}
      >
        <Navigation />
        <SwitchLang />
        <Search />
        {isAuth ? <UserManagement /> : <AuthButtons />}
      </div>
      <Burger handler={burgerHandler} activeClass={activeClass} />
    </header>
  );
};

export default Header;