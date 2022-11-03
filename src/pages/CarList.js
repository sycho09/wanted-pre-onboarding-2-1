import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../utils/ThemeContext';
import useGetList from '../utils/hooks/useGetList';
import ErrorMessage from '../components/atoms/ErrorMessage';
import Category from '../components/organisms/Category';

function CarList() {
  const { list } = useThemeContext();
  const { isLoading, isSuccess, getCarList } = useGetList();
  const navigate = useNavigate();

  useEffect(() => {
    getCarList();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log(isLoading);
      console.log('list', list);
    }
  }, [isSuccess]);

  return (
    <>
      <Category />
      {isLoading && <ErrorMessage>불러오는 중입니다</ErrorMessage>}
      {!isLoading && isSuccess && (
        <div style={{ padding: '2rem 1rem' }}>
          {list.map((el) => (
            <>
              <button type='button' onClick={() => navigate(`/${el.id}`)}>
                이동하기
              </button>
              <p>{el.attribute.brand}</p>
              <p>{el.attribute.name}</p>
              <p>{el.attribute.segment}</p>
              <p>{el.attribute.fuelType}</p>
              <img alt={el.id} src={el.attribute.imageUrl} width='100px' />
              <p>{el.amount}</p>
            </>
          ))}
        </div>
      )}

      {!isLoading && isSuccess && list.length < 1 && (
        <ErrorMessage>차량이 없습니다</ErrorMessage>
      )}
    </>
  );
}

export default CarList;
