import styled from "styled-components";
import colors from "constants/colors";
import { ReactComponent as ArrowIcon } from "assets/icon/Arrow right alt.svg";
import { ReactComponent as BusIcon } from "assets/icon/directions_bus_black_24dp.svg";
import { CityBusListItem } from "../bus/CityBusListItem";

export default function MainBusItem(props) {
  const { bus } = props;
  return (
    <div>
      <Title>
        <Text>{bus.origin}</Text>
        <StyledArrow />
        <Text>{bus.destination}</Text>
      </Title>
      <CityBusListItem
        busColor={bus.busColor}
        busNumber={bus.busNumber}
        remainingTime={bus.remainingTime}
      />
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
