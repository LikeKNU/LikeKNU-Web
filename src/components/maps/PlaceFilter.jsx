import styled from 'styled-components';
import { PLACES_TYPE } from '../../constants/places';
import PlaceFilterButton from './PlaceFilterButton';

const PlaceFilter = () => {
  return (
    <>
      <VerticalScroll>
        {Object.values(PLACES_TYPE).map((type, index) => (
          <PlaceFilterButton type={type} key={index} />
        ))}
        {Object.values(PLACES_TYPE).map((type, index) => (
          <PlaceFilterButton type={type} key={index} />
        ))}
      </VerticalScroll>
    </>
  );
};

const VerticalScroll = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 10;
  
  display: flex;
  flex-direction: row;

  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  
  padding: 18px 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default PlaceFilter;
