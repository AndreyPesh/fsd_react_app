import { Outlet, useNavigation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '4_widgets/header/Header';
import Loader from '7_shared/loader/Loader';
import { NavigationState } from './types/enum';
import { DELAY_TIME_TOAST } from './constants';

const App = (): JSX.Element => {
  const navigation = useNavigation();
  const isLoading = navigation.state === NavigationState.loading;
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <Outlet />}
      <ToastContainer autoClose={DELAY_TIME_TOAST} />
    </>
  );
};

export default App;