import { calendarMainAPI } from 'api/main';
import CardContainer from 'components/styles/CardContainer';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightArrowIcon } from '../../assets/icon/right-arrow.svg';
import { PAGE_NAME } from '../../constants/pageName';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import MainCalendarItem from './MainCalendarItem';

export default function MainCalendar() {
  const [scheduleList, setScheduleList] = useState([]);
  const navigate = useNavigate();
  const getSchedule = async () => {
    const res = await calendarMainAPI();
    setScheduleList(res);
  };
  const goCalendar = () => {
    navigate(`/calendar`);
  };
  useEffect(() => {
    getSchedule();
  }, []);
  return (
    <CardContainer>
      <Title onClick={goCalendar}>{PAGE_NAME.CALENDAR}<StyledRightArrowIcon /></Title>
      <CalendarList>
        {scheduleList.map((schedule) => (
          <MainCalendarItem key={schedule.scheduleId} schedule={schedule} />
        ))}
      </CalendarList>
    </CardContainer>
  );
}

const Title = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 16px;
  display: flex;
`;

const CalendarList = styled.div`
  height: 160px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1.2rem;
`;

const StyledRightArrowIcon = styled(RightArrowIcon)`
  fill: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  margin-left: 4px;
`;
