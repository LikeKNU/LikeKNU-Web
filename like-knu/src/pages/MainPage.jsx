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
import { getCampus } from "../utils/DeviceManageUtil";

export default function MainPage() {
  const [selectCampus, setSelectCampus] = useState(getCampus);

  return (
    <PageLayout>
      <MainHeader setSelectCampus={setSelectCampus} />
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
  padding-top: 74px;
  padding-bottom: 110px;
  grid-template-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 14px;
  grid-row-gap: 12px;
`;
