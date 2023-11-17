import styled from "styled-components";
import { BusDestination } from "./BusDestination";
import { useState } from "react";
import PageContainer from "../../layouts/PageContainer";
const school = ["학교로 출발", "학교로 도착"];

function CityBus() {
  const [destination, setDestination] = useState(0);
  return (
    <Wrapper>
      <BusDestinationArea>
        {school.map((text, index) => (
          <BusDestination
            key={index}
            onClick={() => setDestination(index)}
            className={destination === index ? "active" : null}
          >
            {text}
          </BusDestination>
        ))}
      </BusDestinationArea>
    </Wrapper>
  );
}
const Wrapper = styled(PageContainer)``;
const BusDestinationArea = styled.div`
  display: flex;
  flex-direction: row;
`;
export default CityBus;
