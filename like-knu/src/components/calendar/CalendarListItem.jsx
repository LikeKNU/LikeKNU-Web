import styled from "styled-components";
import colors from "../../constants/colors";

export default function CalendarListItem({ scheduleContent }) {
  return (
    <Wrapper>
      {scheduleContent.map((s, index) => (
        <Content key={index}>
          <Date>{s["scheduleDate"]}</Date>
          <Text>{s.scheduleContents}</Text>
        </Content>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 10px;
  padding-left: 16px;
  border-left: 2px solid ${colors.BLACK};
`;
const Content = styled.div`
  margin-bottom: 15px;
`;
const Date = styled.div`
  color: ${colors.GRAY350};
  font-size: 1.2rem;
  margin-bottom: 4px;
`;
const Text = styled.div`
  color: ${colors.BLACK};
  font-size: 1.4rem;
`;
