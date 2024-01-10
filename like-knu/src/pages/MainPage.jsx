import MainNotice from "components/main/MainNotice";
import React, { useState } from "react";
import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import MainHeader from "components/main/MainHeader";
import MainBus from "components/main/MainBus";
import MainMenu from "components/main/MainMenu";
import MainCalendar from "components/main/MainCalendar";
import styled from "styled-components";
import colors from "constants/colors";
import KakaoAdFit from '../KakaoAdFit';
import { getCampus } from "../utils/DeviceManageUtil";

export default function MainPage() {
  const [selectCampus, setSelectCampus] = useState(getCampus);

  return (
    <PageLayout>
      <MainHeader setSelectCampus={setSelectCampus} />
      <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={'320'} height={'50'} disabled={false} />
      <StyledPageContainer>
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
  padding-top: 12px;
  grid-template-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 14px;
  grid-row-gap: 12px;
`;
