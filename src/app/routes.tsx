import {Route, Routes as RouterWrapper} from 'react-router-dom';
import NotFoundPage from './features/NotFoundPage';
import {DefaultLayout} from './themes';

import HomePage from './features/HomePage';

const AppRouter = () => {
  return (
    <RouterWrapper>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </RouterWrapper>
  );
};

export default AppRouter;
