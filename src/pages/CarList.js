import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../utils/ThemeContext';
import useGetList from '../utils/hooks/useGetList';
import ErrorMessage from '../components/atoms/ErrorMessage';
import Category from '../components/organisms/Category';
import MetaBox from '../components/molecules/MetaBox';
import { FUEL_TYPE, SEGMENT } from '../utils/types';
import CarItem from '../components/organisms/CarItem';

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
    }
  }, [isSuccess]);

  return (
    <>
      <Category />
      {isLoading && <ErrorMessage>불러오는 중입니다</ErrorMessage>}
      <div>
        <MetaBox name='전체차량' brand='B2C 차량 대여 서비스' />
        {!isLoading && isSuccess && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {list.map((el) => (
              <button
                type='button'
                style={{ borderBottom: '1px solid black' }}
                onClick={() => navigate(`/${el.id}`)}
              >
                <CarItem
                  brand={el.attribute.brand}
                  name={el.attribute.name}
                  segment={SEGMENT[el.attribute.segment]}
                  fuelType={FUEL_TYPE[el.attribute.fuelType]}
                  amount={el.amount.toLocaleString()}
                  thumbnail={el.attribute.imageUrl}
                />
              </button>
            ))}
          </div>
        )}
      </div>
      {!isLoading && isSuccess && list.length < 1 && (
        <ErrorMessage>차량이 없습니다</ErrorMessage>
      )}
    </>
  );
}

export default CarList;
