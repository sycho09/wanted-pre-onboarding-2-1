/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import useGetDate from '../../utils/hooks/useGetData';
import DescriptionWrapper from '../atoms/DescriptionWrapper';
import ImageBox from '../atoms/ImageBox';
import InfoText from '../atoms/InfoText';
import TitleBox from '../atoms/TitleBox';
import SubTitle from '../atoms/SubTitle';
import DetailInfoBox from '../molecules/DetailInfoBox';

export default function CarDescription({ ...selected }) {
  const {
    brand,
    name,
    segment,
    fuelType,
    imageUrl,
    amount,
    createdAt,
    insurance,
    additionalProducts
  } = selected;

  const { dates, day, month, getdate } = useGetDate(createdAt);

  return (
    <DescriptionWrapper>
      <ImageBox alt='car_ImageBox' src={imageUrl} />
      <TitleBox>
        <h6>{brand}</h6>
        <h5>{name}</h5>
        <InfoText>월 {amount} 원</InfoText>
      </TitleBox>
      <SubTitle>차량 정보 </SubTitle>
      <DetailInfoBox label='차종' text={fuelType} />
      <DetailInfoBox label='연료' text={segment} />
      <DetailInfoBox
        label='이용 가능일'
        text={`${month}월 ${getdate}일 (${dates[day]})부터`}
      />
      <SubTitle>보험</SubTitle>
      {insurance.map((el) => (
        <DetailInfoBox label={el.name} text={el.description} />
      ))}
      <SubTitle>추가상품</SubTitle>
      {additionalProducts.map((el) => (
        <DetailInfoBox label={el.name} text={`월 ${el.amount}만원`} />
      ))}
    </DescriptionWrapper>
  );
}
