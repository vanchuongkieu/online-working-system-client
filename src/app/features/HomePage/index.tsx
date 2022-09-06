import {API_V1_URL} from '@/utils/constants';
import {Button} from 'antd';
import {Helmet} from 'react-helmet-async';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {UserProfileSelector} from '../Auth/reducer';
import * as S from './styled';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  const user = useSelector(UserProfileSelector);

  const googleLogout = () => {
    window.open(API_V1_URL + '/auth/google/logout', '_self');
  };

  return (
    <S.Wrapper>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <S.TestDiv>
        HomePage
        {user ? (
          <>
            <span>{user.name}</span>
            <Button onClick={googleLogout}>Logout</Button>
          </>
        ) : (
          <Button>
            <Link to="/auth/login">Login</Link>
          </Button>
        )}
      </S.TestDiv>
    </S.Wrapper>
  );
};

export default HomePage;
