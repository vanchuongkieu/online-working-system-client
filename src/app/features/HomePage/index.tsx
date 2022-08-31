import {Helmet} from 'react-helmet-async';
import * as S from './styled';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <S.Wrapper>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <span>HomePage</span>
    </S.Wrapper>
  );
};

export default HomePage;
