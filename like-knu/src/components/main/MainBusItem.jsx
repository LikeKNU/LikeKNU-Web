import styled from "styled-components"
import colors from "constants/colors"
import {ReactComponent as ArrowIcon} from "assets/icon/Arrow right alt.svg"
import {ReactComponent as BusIcon} from "assets/icon/directions_bus_black_24dp.svg"

export default function MainBusItem(props) {
  const {bus} = props;
  const busColor = "#"+bus.busColor;
  return (
    <div>
      <Title>
        <Text>{bus.departureStop}</Text>
        <StyledArrow />
        <Text>{bus.arrivalStop}</Text>
      </Title>
      <RowArea>
        <RowArea>
          <BusIcon fill={busColor} />
          <BoldText $margin="0 0 0 1.2rem">{bus.busNumber}</BoldText>
        </RowArea>
        <RowArea>
          <BoldText $margin="0 2rem 0 0">{bus.remainingTime}</BoldText>
          <LightText>{bus.arrivalTime}</LightText>
        </RowArea>
      </RowArea>
    </div>
  )
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.black};
  text-align: center;
`
const StyledArrow = styled(ArrowIcon)`
  margin: 0 1rem;
`
const RowArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const BoldText = styled(Text)`
  font-size: 1.6rem;
  font-weight: 600;
  margin: ${(props) => props.$margin}; 
`
const LightText = styled.div`
  color: ${colors.gray400};
  font-size: 1.6rem;
  font-weight: 300;
`