import MainBus from 'components/main/MainBus';
import MainCalendar from 'components/main/MainCalendar';
import MainHeader from 'components/main/MainHeader';
import MainMenu from 'components/main/MainMenu';
import MainNotice from 'components/main/MainNotice';
import colors from 'constants/colors';
import PageContainer from 'layouts/PageContainer';
import PageLayout from 'layouts/PageLayout';
import React from 'react';
import styled from 'styled-components';
import KakaoAdFit from '../KakaoAdFit';
import { isDarkMode } from '../utils/DeviceManageUtil';

export default function MainPage({ setCampus, selectedCampus }) {

  return (
    <PageLayout>
      <MainHeader setCampus={setCampus} />
      <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={'320'} height={'100'} disabled={false}
                  style={{ marginTop: '66px' }}></KakaoAdFit>
      <StyledPageContainer>
        <MainNotice selectCampus={selectedCampus} />
        <MainBus selectCampus={selectedCampus} />
        <MainMenu selectCampus={selectedCampus} />
        <MainCalendar />
      </StyledPageContainer>
    </PageLayout>
  );
}

const StyledPageContainer = styled(PageContainer)`
  background-color: ${!isDarkMode() ? colors.GRAY50 : colors.DARK};
  padding-top: 126px;
  grid-template-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 14px;
  grid-row-gap: 12px;
`;
