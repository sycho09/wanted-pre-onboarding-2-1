import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Appbar from '../molecules/Appbar';

const Back = styled.p`
  position: absolute;
  left: 10px;
  cursor: pointer;
`;
export default function Header({ value }) {
  const navigate = useNavigate();
  return (
    <Appbar>
      {value === '차량상세' && <Back onClick={() => navigate('/')}>뒤로</Back>}
      {value}
    </Appbar>
  );
}
