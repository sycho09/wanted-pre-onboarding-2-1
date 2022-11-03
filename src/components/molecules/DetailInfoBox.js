import React from 'react';
import InfoText from '../atoms/InfoText';
import InfoLabel from '../atoms/InfoLabel';
import RowFlexBox from '../atoms/RowFlexBox';

export default function DetailInfoBox({ label, text }) {
  return (
    <RowFlexBox>
      <InfoLabel>{label}</InfoLabel>
      <InfoText>{text}</InfoText>
    </RowFlexBox>
  );
}
