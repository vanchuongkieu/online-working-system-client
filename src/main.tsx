import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {theme, ThemeProvider} from './app/styles/styled-components';
import {store} from './redux/config-store';

import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.min.css';

import App from './app';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const ConnectedApp = () => {
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(MOUNT_NODE).render(<ConnectedApp />);
