import styled, { keyframes } from "styled-components";
import { ReactComponent as RefreshIcon } from "assets/icon/refresh_black_24dp.svg";
import colors from "constants/colors";

export default function BusRefreshBtn({ getBuses }) {
  const refreshHandler = () => {
    getBuses();
  };

  return (
    <Wrapper onClick={refreshHandler}>
      <StyledRefresh />
    </Wrapper>
  );
}
const Wrapper = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.GRAY200};
  background-color: ${colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRefresh = styled(RefreshIcon)`
  width: 18px;
  height: 18px;
  fill: ${colors.GRAY500};
`;
