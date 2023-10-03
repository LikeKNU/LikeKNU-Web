import styled from "styled-components";
import colors from "constants/colors";

export default function BackHeader({pageName}) {
  return (
      <Wrapper>
        <Text>{pageName}</Text>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  
  height: 76px;
  padding-right: 16px;
  padding-left: 16px;
  
  border-bottom: 1px solid ${colors.gray100};
`
const Text = styled.div`
  color: ${colors.black};
  font-size: 2.2rem;
  font-weight: 700;
  
`