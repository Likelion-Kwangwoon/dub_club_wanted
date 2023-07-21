import { BrowserRouter, Routes, Route } from'react-router-dom';
import React, { Fragment } from 'react';
import MainPage from './components/main/mainPage';
import TopBar from './components/navigation/topBar';
import LoginPage from './components/loginPage/loginPage';
import DetailInput from './components/detailInput/detailInput';
import MemberClassify from './components/loginPage/memberClassify';
import MemberRegister from './components/loginPage/memberRegister';
import ClubRegister from './components/loginPage/clubRegister';
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
          <Route path='/classify' element={<MemberClassify />} />
          <Route path='/memregister' element={<MemberRegister />} />
          <Route path='/clubregister' element={<ClubRegister />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default Router;