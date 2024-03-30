import colors from 'constants/colors';
import styled from 'styled-components';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default function MainCalendarItem(props) {
  const { schedule } = props;
  return (
    <div>
      <Title>
        <DateText>{schedule.scheduleDate}</DateText>
      </Title>
      <Content>{schedule.scheduleContents}</Content>
    </div>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  margin-bottom: 2px;
`;
const DateText = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-weight: 600;
`;
const TodayText = styled.div`
  color: ${!isDarkMode() ? colors.GRAY300 : colors.GRAY500};
`;

const Content = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 117px;
  white-space: nowrap;
`;
