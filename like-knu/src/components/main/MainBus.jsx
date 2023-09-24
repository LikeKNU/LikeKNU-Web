import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { bus } from "api/main"
import { useState, useEffect } from "react"
import MainBusItem from "components/main/MainBusItem"
import BusRefreshBtn from 'components/BusRefreshBtn'

export default function MainBus() {
  const [buses, setBuses] = useState([]);

  const getBuses = async() => {
    const res = await bus();
    setBuses(res);
  }

  useEffect( () => {
    getBuses();
  },[]);
  return (
    <BusContainer>
      <Title>버스</Title>
      <BusRefreshBtn></BusRefreshBtn>
      <BusList>
        {
          buses.map((bus) => (
            <MainBusItem key={bus.routeId} bus={bus} />
          ))
        }
      </BusList>
    </BusContainer>
  )
}

const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;
  position: relative;
  min-height: 80px;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const BusList = styled.div`
  display:grid;
  grid-row-gap: 1.2rem;
`