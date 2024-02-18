import { Header, PageHeader } from 'components/styles/PageHeader';
import PageContainer from 'layouts/PageContainer';
import PageLayout from 'layouts/PageLayout';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calendar } from '../api/calendar';
import CalendarListItem from '../components/calendar/CalendarListItem';
import colors from '../constants/colors';
import { PAGE_NAME } from '../constants/pageName';
import { isDarkMode } from '../utils/DeviceManageUtil';

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
  border-bottom: 0.5px solid ${!isDarkMode() ? colors.GRAY100 : colors.GRAY600};
`;
const StyledPageContainer = styled(PageContainer)`
  padding-top: 68px;
`;
const Month = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 20px;
`;
