import styled from "styled-components"
import CardContainer from "components/CardContainer"
import colors from "constants/colors"
import { bus } from "api/main"
import { useState, useEffect } from "react"
import BusItem from "components/BusItem"

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

      <BusList>
        {
          buses.map((bus) => (
          <BusItem key={bus.routeId} bus={bus} />
          ))
        }
        {/* <BusItem />
        <BusItem />
        <BusItem /> */}
      </BusList>
    </BusContainer>
  )
}

const BusContainer = styled(CardContainer)`
  grid-column: 1 / 3;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const BusList = styled.div`
  display:grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1.2rem;

`