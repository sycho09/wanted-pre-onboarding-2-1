import styled from 'styled-components';

const Appbar = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Appbar;
