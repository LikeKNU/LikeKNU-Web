import styled, {css} from "styled-components";
import Tag from "../styles/Tag";
import {useState} from "react";
import colors from "../../constants/colors";
export default function TagItem({name}) {
  const [mode, setMode] = useState("default");
  const changeMode = () => {
    mode === "default" ? setMode("click") : setMode("default");
  }
  return (
    <StyledTag onClick={changeMode} $mode={mode} className={mode}>
      {name}
    </StyledTag>
  )
}

const StyledTag = styled(Tag)`
  ${(props) => {
    switch(props.$mode) {
      case "click":
        return css`
          background-color: ${colors.common};
          color: ${colors.white};
        `
      default :
        return css`
          background-color: ${colors.gray100};
          color: ${colors.gray400};
        `

    }
  }}
`