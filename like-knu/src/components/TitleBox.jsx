import styled from "styled-components";
import colors from "constants/colors";

export default function TitleBox(props) {
  const { text, colors, margin_top } = props;
  return (
    <Wrapper $margin_top={margin_top}>
      <Inner>{text}</Inner>
    </Wrapper>
  );
}
const Inner = styled.div`
  border: 2px solid ${colors.CHEONAN};
  color: ${colors.CHEONAN};
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 700;
  width: 70%;
  margin: 0 auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.WHITE};
`;
const Wrapper = styled.div`
  margin-bottom: 10px;
  margin-top: ${(props) => props.$margin_top};
`;
