import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarList from './pages/CarList';
import CarDescription from './pages/CarDescription';
import Layout from './components/organisms/Layout';

function Router() {
  return (
    <BrowserRouter basename='wanted-pre-onboarding-2-1'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CarList />} />
          <Route path='/:carId' element={<CarDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
