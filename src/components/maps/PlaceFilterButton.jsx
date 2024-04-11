import styled from 'styled-components';
import colors, { campusColors } from '../../constants/colors';
import { getCampus, isDarkMode } from '../../utils/DeviceManageUtil';

const PlaceFilterButton = ({ type, isSelected, handleOnClick }) => {
  return (
    <>
      <Wrapper onClick={handleOnClick} isSelected={isSelected}>
        <Icon>{type.icon}</Icon>
        <Text isSelected={isSelected}>{type.name}</Text>
      </Wrapper>
    </>
  );
};

export default PlaceFilterButton;

const Wrapper = styled.div`
    //background-color: ${isDarkMode() ? colors.DARK_GRAY : colors.WHITE};
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

const Icon = styled.div`
  width: 18px;
  height: 18px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 4px;
  margin-right: 4px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
    //color: ${isDarkMode() ? colors.DARK_WHITE : colors.BLACK};
  color: ${(props) => (props.isSelected ? colors.WHITE : colors.GRAY400)};
`;
