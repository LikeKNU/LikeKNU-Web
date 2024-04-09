import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

const PlaceFilterButton = ({ type }) => {
  return (
    <>
      <Wrapper>
        <Icon>{type.icon}</Icon>
        <Text>{type.name}</Text>
      </Wrapper>
    </>
  );
};

export default PlaceFilterButton;

const Wrapper = styled.div`
    //background-color: ${isDarkMode() ? colors.DARK_GRAY : colors.WHITE};
  background-color: ${colors.GRAY100};
  border-radius: 20px;

  display: flex;
  flex-direction: row;

  margin-right: 6px;

  align-content: center;
  align-items: center;
  justify-content: center;

  padding: 4px 12px 4px 12px;

     box-shadow: ${isDarkMode() ? '0 2px 0 0 rgba(80, 80, 80, 0.1)' : '0 2px 0 0 rgba(175, 175, 175, 0.1)'};
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 4px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  //color: ${isDarkMode() ? colors.DARK_WHITE : colors.BLACK};
  color: ${colors.GRAY400};
`;
