import styled from "styled-components";
import colors from "constants/colors";
import { ReactComponent as ArrowIcon } from "assets/icon/Arrow right alt.svg";
import { ReactComponent as BusIcon } from "assets/icon/directions_bus_black_24dp.svg";

export default function MainBusItem(props) {
  const { bus } = props;
  const busColor = "#" + bus.busColor;
  return (
    <div>
      <Title>
        <Text>{bus.origin}</Text>
        <StyledArrow />
        <Text>{bus.destination}</Text>
      </Title>
      <RowArea>
        <BusIcon fill={busColor} />
        <BoldText $margin="0 3rem 0 1.2rem">{bus.busNumber}</BoldText>
        <LightText>{bus.remainingTime}</LightText>
      </RowArea>
    </div>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.BLACK};
  text-align: center;
`;
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
`;
const RowArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
