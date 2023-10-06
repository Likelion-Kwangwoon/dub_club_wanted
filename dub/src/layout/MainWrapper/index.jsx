import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import * as S from './style';

function MainWrapper() {
  return (
    <>
      <Header />
      <S.Section>
        <S.OutletWrapper>
          <Outlet />
        </S.OutletWrapper>
      </S.Section>
    </>
  )
}

export default MainWrapper;