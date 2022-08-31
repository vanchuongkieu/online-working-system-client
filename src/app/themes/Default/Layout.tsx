import {Outlet} from 'react-router-dom';
import H1 from '@/app/components/UI/H1';
import * as S from './styled';

function Layout() {
  return (
    <S.Wrapper>
      <H1>Header</H1>
      <Outlet />
    </S.Wrapper>
  );
}

export default Layout;
