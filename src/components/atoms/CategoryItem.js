import styled from 'styled-components';

const CategoryItem = styled.button`
  width: 62px;
  height: 27px;
  border-radius: 62px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey};
  color: ${({ theme, isSelected }) =>
    isSelected ? '#fff' : theme.colors.black};
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
`;

export default CategoryItem;
