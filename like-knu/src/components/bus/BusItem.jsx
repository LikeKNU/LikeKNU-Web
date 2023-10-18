import styled, {css} from "styled-components";
import React from "react";
import colors from "../../constants/colors";

export function BusItem({routeCount, campus}) {
  const calAreaHeight = () => {
    return (12 * routeCount) + (18 * (routeCount - 1));
  }
  return (
    <Wrapper $height={calAreaHeight() + "px"}>
      <div className="marker_area">
        {
          Array(routeCount).fill(0).map((_, index) => (
            <Circle key={index} $campus={campus}></Circle>
          ))
        }
        <Line $campus={campus}/>
      </div>
      <div className="text_area">
        {
          Array(routeCount).fill(0).map((_, index) => (
            <div key={index}>뭐지 </div>
          ))
        }
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
  margin-top: 20px;

  .text_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 1.4rem;
  }

  .marker_area {
    width: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: ${(props) => props.$height};
  }
`
const Circle = styled.div`
  ${(props) => {
    switch (props.$campus) {
      case "천안캠":
        return css`
          border: 3px solid ${colors.cheonAn};
        `
      case "신관캠":
        return css`
          border: 3px solid ${colors.sinGwan};
        `
      case "예산캠":
        return css`
          border: 3px solid ${colors.yeSan};
        `
      default:
        return css`
          border: 3px solid ${colors.common};
        `
    }
  }}
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #FFF;
`
const Line = styled.div`
  ${(props) => {
    switch (props.$campus) {
      case "천안캠":
        return css`
          background-color: ${colors.cheonAn};
        `
      case "신관캠":
        return css`
          background-color: ${colors.sinGwan};
        `
      case "예산캠":
        return css`
          background-color: ${colors.yeSan};
        `
      default:
        return css`
          background-color: ${colors.common};
        `
    }
  }}
  height: inherit;
  width: 2px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;
`
