import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useDispatch} from 'react-redux';
import {authAction} from './features/Auth/reducer';
import AppRouter from './routes';
import authService from './services/auth.service';
import GlobalStyle from './styles/global-styles';

type AppProps = {};

const App = (props: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getGoogleProfile().then((res) => {
      dispatch(authAction.setProfile(res.data.profile));
    });
  }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s - Online Working System"
        defaultTitle="Online Working System"
      >
        <meta name="description" content="Online Working System" />
      </Helmet>
      <AppRouter />
      <GlobalStyle />
    </>
  );
};

export default App;
