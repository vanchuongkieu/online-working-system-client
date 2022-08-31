import styled from '@/app/styles/styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${({theme}) => theme.color.light};
  padding: 15px;
  color: ${({theme}) => theme.color.primary};
`;
