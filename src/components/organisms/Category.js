/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react';
import useGetList from '../../utils/hooks/useGetList';
import CategoryItem from '../atoms/CategoryItem';
import CategoryBox from '../atoms/CategoryBox';
import { segmentKeys, segmentValues } from '../../utils/types';

export default function Category() {
  const [selected, setSeleted] = useState('');
  const { getCarList, getFilterCar } = useGetList();

  const selectCarCategory = (index) => {
    setSeleted(segmentKeys[index]);
    getFilterCar({ segment: segmentKeys[index] });
  };

  const selectAllCar = () => {
    setSeleted('ALL');
    getCarList();
  };

  return (
    <CategoryBox>
      <CategoryItem
        isSelected={selected === 'ALL'}
        onClick={() => selectAllCar()}
      >
        전체
      </CategoryItem>
      {segmentValues.map((el, i) => (
        <CategoryItem
          key={el}
          isSelected={selected === segmentKeys[i]}
          onClick={() => selectCarCategory(i)}
        >
          {el}
        </CategoryItem>
      ))}
    </CategoryBox>
  );
}
