import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import * as S from './style';

function MainWrapper() {
  return (
    <>
      <Header />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  )
}

export default MainWrapper;