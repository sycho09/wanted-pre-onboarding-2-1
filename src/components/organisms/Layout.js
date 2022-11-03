import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const WebViewContainer = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ViewContainer = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: block;
  }
  ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

function Layout() {
  const [pageName, setPageName] = useState('전체차량');
  const { pathname } = useLocation();

  const getPageName = () => {
    if (pathname === '/') setPageName('전체차량');
    if (pathname !== '/') setPageName('차량상세');
  };

  useEffect(() => {
    getPageName();
  }, [pathname]);

  return (
    <>
      <WebViewContainer>모바일 환경에서 사용해주세요</WebViewContainer>
      <Header value={pageName} />
      <ViewContainer>
        <Outlet />
      </ViewContainer>
    </>
  );
}

export default Layout;
