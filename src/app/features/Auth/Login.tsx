import {API_V1_URL} from '@/utils/constants';
import {Button} from 'antd';
import * as S from './styled';

type LoginProps = {};

const Login = (props: LoginProps) => {
  const googleLogin = () => {
    window.open(API_V1_URL + '/auth/google?role=teacher', '_self');
  };

  return (
    <S.Wrapper>
      <Button block onClick={googleLogin}>
        Google
      </Button>
    </S.Wrapper>
  );
};

export default Login;
