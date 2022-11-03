import styled from 'styled-components';

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default CategoryContainer;
