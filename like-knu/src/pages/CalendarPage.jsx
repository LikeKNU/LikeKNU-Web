import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import { PageHeader, Header } from "components/styles/PageHeader";
import styled from "styled-components";
import colors from "../constants/colors";
import { useEffect, useState } from "react";
import { calendar } from "../api/calendar";
import CalendarListItem from "../components/calendar/CalendarListItem";
export default function CalendarPage() {
  const [scheduleList, setScheduleList] = useState([]);
  const getScheduleList = async () => {
    const res = await calendar();
    console.log(res);
    setScheduleList(res);
  };
  useEffect(() => {
    getScheduleList().then((r) => console.log(r));
  }, []);
  return (
    <PageLayout>
      <Header>
        <StyledPageHeader>학사일정</StyledPageHeader>
      </Header>
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
  padding-top: 68px;
`;
const Month = styled.div`
  color: ${colors.BLACK};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 20px;
`;
