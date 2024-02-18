import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default function CalendarListItem({ scheduleContent }) {
  return (
    <Wrapper>
      {scheduleContent.map((s, index) => (
        <Content key={index}>
          <Date>{s['scheduleDate']}</Date>
          <Text>{s.scheduleContents}</Text>
        </Content>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 10px;
  padding-left: 16px;
  border-left: 2px solid ${!isDarkMode() ? colors.BLACK : colors.WHITE};
`;
const Content = styled.div`
  margin-bottom: 15px;
`;
const Date = styled.div`
  color: ${!isDarkMode() ? colors.GRAY350 : colors.GRAY400};
  font-size: 1.2rem;
  margin-bottom: 4px;
`;
const Text = styled.div`
  color: ${!isDarkMode() ? colors.BLACK : colors.WHITE};
  font-size: 1.4rem;
`;
