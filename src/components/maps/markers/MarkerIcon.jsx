import styled from 'styled-components';
import { ReactComponent as MapMarkerFill } from '../../../assets/icon/map-marker-fill.svg';
import colors, { campusColors } from '../../../constants/colors';
import { getCampus } from '../../../utils/DeviceManageUtil';

const MarkerIcon = ({ name, type }) => {
  const campusColor = campusColors[getCampus()];

  return (
    <Wrapper $color={campusColor}>
      <Name>{name}</Name>
      <Icon>{type.icon}</Icon>
      <StyledMapMarkerFill />
    </Wrapper>
  );
};

export default MarkerIcon;

const Wrapper = styled.div`
  opacity: 0.9;
  
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

  filter: drop-shadow(2px 6px 8px rgba(0, 0, 0, 0.2));
  
  z-index: 1;
`;

const Icon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: 20px;
  font-size: 24px;
  text-align: center;
  z-index: 5;
`;

const Name = styled.span`
  max-width: 64px;
  padding: 1px 4px;
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
