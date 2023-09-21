import styled from "styled-components"
import colors from "constants/colors";

export default function TitleBox(props) {
  const {text, colors, margin_top} = props;
  return (
    <Wrapper $margin_top={margin_top}>{text}</Wrapper>
  )
}

const Wrapper=styled.div`
  width: auto;
  height: 20px;
  color: ${colors.cheonAn};
  border: 2px solid ${colors.cheonAn};
  background-color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0px 1.4rem;
  border-radius: 8px;
  margin-top: ${(props) => props.$margin_top};
  // box-sizing: border-box;
  padding: 1px;

  // color: #fff;
  // text-align:center;
  margin: 5px;
  // border: 1px solid #000;
`