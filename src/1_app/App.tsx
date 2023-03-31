import Loader from '7_shared/loader/Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import { NavigationState } from './types/enum';
// import Header from './components/Header';
// import Loader from './components/ui/Loader';
// import { ToastContainer } from 'react-toastify';
// import { DELAY_TIME_TOAST } from './utils/constants';

const App = (): JSX.Element => {
  const navigation = useNavigation();
  const isLoading = navigation.state === NavigationState.loading;
  return (
    <>
      {/* <Header /> */}
      {isLoading ? <Loader /> : <Outlet />}
      {/* <ToastContainer autoClose={DELAY_TIME_TOAST} /> */}
      <h2>App</h2>
    </>
  );
};

export default App;