import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import { PageHeader, Header } from "components/styles/PageHeader";
import styled from "styled-components";
import colors from "../constants/colors";
import React, { useEffect, useState } from "react";
import { calendar } from "../api/calendar";
import CalendarListItem from "../components/calendar/CalendarListItem";
import { PAGE_NAME } from "../constants/pageName";
import KakaoAdFit from '../KakaoAdFit';
export default function CalendarPage() {
  const [scheduleList, setScheduleList] = useState([]);
  const getScheduleList = async () => {
    const res = await calendar();
    setScheduleList(res);
  };
  useEffect(() => {
    getScheduleList().then((r) => console.log(r));
  }, []);
  return (
    <PageLayout>
      <Header>
        <StyledPageHeader>{PAGE_NAME.CALENDAR}</StyledPageHeader>
      </Header>
      <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={'320'} height={'100'} disabled={false}
                  style={{ marginTop: '68px' }}></KakaoAdFit>
      <StyledPageContainer>
        {scheduleList.map((schedule, index) => (
          <Content key={index}>
            <Month>{schedule.scheduleCriterion}</Month>
            <CalendarListItem
              scheduleContent={schedule.scheduleWrapper}
            ></CalendarListItem>
          </Content>
        ))}
      </StyledPageContainer>
    </PageLayout>
  );
}

const Content = styled.div``;
const StyledPageHeader = styled(PageHeader)`
  border-bottom: 1px solid ${colors.GRAY100};
`;
const StyledPageContainer = styled(PageContainer)`
  padding-top: 0;
`;
const Month = styled.div`
  color: ${colors.BLACK};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 20px;
`;
