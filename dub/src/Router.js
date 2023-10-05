import { BrowserRouter, Routes, Route } from'react-router-dom';
import React from 'react';
import SigninPage from './pages/signInPage';
import SocialSignin from './components/signinComponent/SocialSignin';
import MainWrapper from './layout';
import MainPage from './pages/mainPage';
import MyPage from './pages/myPage';
import PostingPage from './pages/postingPage';
import GridPage from './pages/gridPage';
import ClubPage from './pages/clubPage';
function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signin/*' element={<SigninPage />} />
        <Route path="/redirect" element={<SocialSignin />} />
        <Route element={<MainWrapper />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/postingPage' element={<PostingPage />} />
          <Route path='/gridPage' element={<GridPage />} />
          <Route path='/clubPage' element={<ClubPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;