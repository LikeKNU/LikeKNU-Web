import styled from 'styled-components';
import colors, { campusColors } from '../../constants/colors';
import { getCampus } from '../../utils/DeviceManageUtil';

const PlaceFilterButton = ({ type, isSelected, handleOnClick }) => {
  return (
    <>
      <Wrapper onClick={handleOnClick} isSelected={isSelected}>
        <Icon src={type.icon}></Icon>
        <Text isSelected={isSelected}>{type.name}</Text>
      </Wrapper>
    </>
  );
};

export default PlaceFilterButton;

const Wrapper = styled.div`
  background-color: ${(props) => (props.isSelected ? campusColors[getCampus()] : colors.GRAY100)};
  border-radius: 20px;

  display: flex;
  flex-direction: row;

  margin-right: 6px;
  padding: 4px 12px;

  align-content: center;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 4px 4px rgba(80, 80, 80, 0.1);
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isSelected ? colors.WHITE : colors.GRAY400)};
`;
