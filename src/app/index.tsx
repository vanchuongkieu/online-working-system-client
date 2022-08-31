import {Helmet} from 'react-helmet-async';
import AppRouter from './routes';
import GlobalStyle from './styles/global-styles';

type AppProps = {};

const App = (props: AppProps) => {
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
