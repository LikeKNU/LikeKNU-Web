import PageLayout from "layouts/PageLayout";
import PageContainer from "layouts/PageContainer";
import {PageHeader, Header} from "components/styles/PageHeader";
import styled from "styled-components";
import colors from "../constants/colors";
import {useEffect, useState} from "react";
import {calendar} from "../api/calendar";
import CalendarListItem from "../components/calendar/CalendarListItem";
export default function CalendarPage() {
  const [scheduleList, setScheduleList] = useState([]);
  const getScheduleList = async () => {
    const res = await calendar();
    console.log(res);
    setScheduleList(res);
  }
  useEffect(() => {
    getScheduleList().then(r => console.log(r));
  }, []);
  return (
      <PageLayout>
          <Header>
              <PageHeader>학사일정</PageHeader>
          </Header>
          <StyledPageContainer>
            {
              scheduleList.map((schedule, index) => (
                <div key={index}>
                  <Month>{schedule.scheduleCriterion}</Month>
                  <CalendarListItem scheduleContent={schedule.scheduleWrapper}></CalendarListItem>
                </div>
              ))
            }
          </StyledPageContainer>
      </PageLayout>
  )
}
const StyledPageContainer = styled(PageContainer)`
  padding-top: 80px;
`
const Month = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`
