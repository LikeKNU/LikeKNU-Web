import { ReactComponent as ArrowIcon } from 'assets/icon/Arrow right alt.svg';
import colors from 'constants/colors';
import styled from 'styled-components';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import { CityBusListItem } from '../bus/CityBusListItem';

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
  margin-bottom: 4px;
`;
const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
  text-align: center;
`;
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
  fill: ${!isDarkMode() ? colors.BLACK : colors.DARK_WHITE};
`;
