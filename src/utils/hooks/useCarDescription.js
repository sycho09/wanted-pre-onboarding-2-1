import { useEffect, useState } from 'react';
import { useThemeContext } from '../ThemeContext';
import useGetList from './useGetList';

export default function useCarDescription(carId) {
  const { getCarList, isSuccess } = useGetList();
  const { list } = useThemeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

  const getCarDescription = () => {
    setIsLoading(true);

    if (list) {
      const [selected] = list.filter((el) => el.id === Number(carId));

      if (!selected) {
        setNoResult(true);
        setIsLoading(false);
        return;
      }

      if (selected) {
        const {
          startDate,
          attribute: { brand, name, segment, fuelType, imageUrl },
          amount,
          insurance,
          additionalProducts
        } = selected;

        setSelectedCar({
          brand,
          name,
          segment,
          fuelType,
          imageUrl,
          amount,
          startDate,
          insurance,
          additionalProducts
        });
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getCarList();
  }, []);

  useEffect(() => {
    if (isSuccess) getCarDescription();
  }, [isSuccess]);

  return { getCarDescription, isLoading, noResult, selectedCar };
}
