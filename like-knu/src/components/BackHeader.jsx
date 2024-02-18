import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/icon/arrow_back_ios_new_black_24dp.svg';
import colors from '../constants/colors';
import { isDarkMode } from '../utils/DeviceManageUtil';

export function BackHeader({ Title }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <button onClick={goBack}>
        <StyledBackIcon />
      </button>
      <Center>{Title}</Center>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 65px;

  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  padding-left: 14px;
  border-bottom: 0.5px solid ${!isDarkMode() ? colors.GRAY100 : colors.GRAY600};
`;
const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${!isDarkMode() ? colors.BLACK : colors.WHITE};
  font-size: 2.2rem;
  font-weight: 600;
`;

const StyledBackIcon = styled(BackIcon)`
  fill: ${!isDarkMode() ? colors.BLACK : colors.WHITE};
`;
