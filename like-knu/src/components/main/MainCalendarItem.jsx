import styled from "styled-components";
import colors from "constants/colors";

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
  color: ${colors.BLACK};
  font-weight: 600;
`;
const TodayText = styled.div`
  color: ${colors.GRAY300};
`;

const Content = styled.div`
  color: ${colors.BLACK};
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 117px;
  white-space: nowrap;
`;
