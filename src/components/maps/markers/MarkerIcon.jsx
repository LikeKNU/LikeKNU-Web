import styled from 'styled-components';
import { ReactComponent as MapMarkerFill } from '../../../assets/icon/map-marker-fill.svg';
import colors, { campusColors } from '../../../constants/colors';
import { PLACES_TYPE } from '../../../constants/places';
import { getCampus } from '../../../utils/DeviceManageUtil';

const MarkerIcon = ({ name, type }) => {
  const campusColor = campusColors[getCampus()];

  const getMarkerIcon = (type) => {
    switch (type) {
      case PLACES_TYPE.BUILDING:
        return '🎓'
      case PLACES_TYPE.DORMITORY:
        return '🛌'
      case PLACES_TYPE.LIBRARY:
        return '📚'
      case PLACES_TYPE.CAFETERIA:
        return '🍴';
    }
  };

  return (
    <Wrapper $color={campusColor}>
      <Name>{name}</Name>
      <Icon>{getMarkerIcon(type)}</Icon>
      <StyledMapMarkerFill />
    </Wrapper>
  );
};

export default MarkerIcon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -4px;
  color: ${({ $color }) => $color};
  transform: translateX(-50%);
  z-index: 90;
`;

const StyledMapMarkerFill = styled(MapMarkerFill)`
  width: 48px;
  height: 48px;
`;

const Icon = styled.div`
  position: absolute;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: white;
  bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Name = styled.span`
  max-width: 64px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 12px;
  background-color: ${colors.BLACK};
  text-align: center;
  font-weight: 600;
  color: ${colors.WHITE};
  margin-bottom: 2px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
