import styled from "styled-components";
import colors from "../constants/colors";
import { ReactComponent as BackIcon } from "../assets/icon/arrow_back_ios_new_black_24dp.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export function BackHeader({ Title }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <button onClick={goBack}>
        <BackIcon fill={colors.BLACK} />
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
  border-bottom: 1px solid ${colors.GRAY100};
`;
const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${colors.BLACK};
  font-size: 2.2rem;
  font-weight: 600;
`;
