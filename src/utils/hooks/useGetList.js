import { useState } from 'react';
import getList from '../api';
import { useThemeContext } from '../ThemeContext';

export default function useGetList() {
  const { list, setList } = useThemeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getCarList = async () => {
    setIsLoading(true);
    setIsSuccess(false);

    const { payload } = await getList('/cars');
    if (payload) {
      setList(payload);
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const getFilterCar = async ({ segment }) => {
    setIsLoading(true);
    setIsSuccess(false);

    const { payload } = await getList('/cars', {
      params: {
        segment
      }
    });

    if (payload) {
      setList(payload);
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  return {
    getCarList,
    getFilterCar,
    list,
    isSuccess,
    isLoading
  };
}
