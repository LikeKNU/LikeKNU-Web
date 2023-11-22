import { ReactComponent as BusIcon } from "assets/icon/directions_bus_black_24dp.svg";
import styled from "styled-components";
import colors from "../../constants/colors";
import { EMPTY_MESSAGE } from "../../constants/message";
export function CityBusListItem({ busColor, busNumber, remainingTime }) {
  const formattedBusColor = "#" + busColor;
  if (!busColor && !busNumber && !remainingTime) {
    return (
      <Wrapper>
        <EmptyText>{EMPTY_MESSAGE}</EmptyText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BusIcon fill={formattedBusColor} />
      <BoldText $margin="0 3rem 0 1.2rem">{busNumber}</BoldText>
      <LightText>{remainingTime}</LightText>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
const BoldText = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin: ${(props) => props.$margin};
  color: ${colors.BLACK};
  text-align: center;
`;
const LightText = styled.div`
  color: ${colors.GRAY500};
  font-size: 1.3rem;
  font-weight: 400;
`;
const EmptyText = styled(LightText)`
  color: ${colors.GRAY300};
  margin-top: 5px;
`;
