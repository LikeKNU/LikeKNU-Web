import MainBus from 'components/main/MainBus';
import MainCalendar from 'components/main/MainCalendar';
import MainHeader from 'components/main/MainHeader';
import MainMenu from 'components/main/MainMenu';
import MainNotice from 'components/main/MainNotice';
import colors from 'constants/colors';
import PageContainer from 'layouts/PageContainer';
import PageLayout from 'layouts/PageLayout';
import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoAdFit from '../KakaoAdFit';
import { getCampus } from '../utils/DeviceManageUtil';

export default function MainPage() {
  const [selectCampus, setSelectCampus] = useState(getCampus);

  return (
    <PageLayout>
      <MainHeader setSelectCampus={setSelectCampus} />
      <StyledPageContainer>
        <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={'100%'} height={'50'} disabled={false} />
        <MainNotice selectCampus={selectCampus} />
        <MainBus selectCampus={selectCampus} />
        <MainMenu selectCampus={selectCampus} />
        <MainCalendar />
      </StyledPageContainer>
    </PageLayout>
  );
}

const StyledPageContainer = styled(PageContainer)`
    background-color: ${colors.GRAY50};
    padding-top: 74px;
    grid-template-rows: minmax(100px, auto);
    grid-template-columns: 1fr 1fr;

    grid-column-gap: 14px;
    grid-row-gap: 12px;
`;
