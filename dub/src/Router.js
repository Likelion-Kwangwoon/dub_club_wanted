import { BrowserRouter, Routes, Route } from'react-router-dom';
import React, { Fragment } from 'react';
import MainPage from './components/main/mainPage';
import TopBar from './components/navigation/topBar';
import LoginPage from './components/loginPage/loginPage';
import DetailInput from './components/detailInput/detailInput';
import RegisterPage from './components/loginPage/registerPage';
function Router() {
  return(
    <BrowserRouter>
      <Fragment>
        <TopBar />
      </Fragment>
      <Fragment>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/detailinput' element={<DetailInput />} />
          <Route path='/registerpage' element={<RegisterPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default Router;