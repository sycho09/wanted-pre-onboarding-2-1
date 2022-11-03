import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../components/atoms/ErrorMessage';
import CarDescription from '../components/templates/CarDescription';
import useCarDescription from '../utils/hooks/useCarDescription';

function CardDescription() {
  const { carId } = useParams();

  const { getCarDescription, isLoading, noResult, selectedCar } =
    useCarDescription(Number(carId));

  useEffect(() => {
    getCarDescription();
  }, []);

  return (
    <>
      {isLoading && <ErrorMessage>불러오는 중입니다</ErrorMessage>}
      {!isLoading && !noResult && selectedCar && (
        <div>
          <CarDescription {...selectedCar} />
        </div>
      )}
      {noResult && <ErrorMessage>결과가 없습니다</ErrorMessage>}
    </>
  );
}

export default CardDescription;
