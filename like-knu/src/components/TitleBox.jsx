import styled from "styled-components"
import colors from "constants/colors";

export default function TitleBox(props) {
  const {text, colors} = props;
  return (
    <Wrapper>{text}</Wrapper>
  )
}

const Wrapper=styled.div`
  width: auto;
  height: 20px;
  padding: 3px 10px;
  color: ${colors.cheonAn};
  border: 1.5px solid ${colors.cheonAn};
  background-color: ${colors.white};
`