import { Header } from 'components/styles/PageHeader';
import PageContainer from 'layouts/PageContainer';
import PageLayout from 'layouts/PageLayout';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calendarAPI } from '../api/calendarAPI';
import { BackHeader } from '../components/BackHeader';
import CalendarListItem from '../components/calendar/CalendarListItem';
import colors from '../constants/colors';
import { PAGE_NAME } from '../constants/pageName';
import { isDarkMode } from '../utils/DeviceManageUtil';

export default function CalendarPage() {
  const [scheduleList, setScheduleList] = useState([]);
  const getScheduleList = async () => {
    const response = await calendarAPI();
    setScheduleList(response);
  };

  useEffect(() => {
    getScheduleList();
  }, []);

  return (
    <PageLayout>
      <Header>
        <BackHeader title={PAGE_NAME.CALENDAR} path={'/'} />
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

const StyledPageContainer = styled(PageContainer)`
  padding-top: 68px;
  padding-bottom: 18px;
`;

const Month = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 20px;
`;
