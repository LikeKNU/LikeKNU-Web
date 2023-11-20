import { ReactComponent as BusIcon } from "assets/icon/directions_bus_black_24dp.svg";
import styled from "styled-components";
import colors from "../../constants/colors";

export function CityBusListItem({ busColor, busNumber, remainingTime }) {
  if (!busColor && !busNumber && !remainingTime) {
    return (
      <Wrapper>
        <Text>30분 이내에 있는 버스가 없습니다.</Text>
      </Wrapper>
    );
  }

  const fomattedBusColor = "#" + busColor;

  return (
    <Wrapper>
      <BusIcon fill={fomattedBusColor} />
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
const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.BLACK};
  text-align: center;
`;
const BoldText = styled(Text)`
  font-size: 1.5rem;
  font-weight: 800;
  margin: ${(props) => props.$margin};
`;
const LightText = styled.div`
  color: ${colors.GRAY500};
  font-size: 1.3rem;
  font-weight: 400;
`;
