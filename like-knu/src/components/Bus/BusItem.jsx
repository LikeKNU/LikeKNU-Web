import styled from "styled-components";
import React from "react";

export function BusItem({routeCount, campus}) {
  const calAreaHeight = () => {
    return (12 * routeCount) + (18 * (routeCount - 1));
  }
  console.log(calAreaHeight());
  return (
    <Wrapper $height={calAreaHeight()+"px"}>
      <div className="marker_area">
        {
          Array(routeCount).fill(0).map((_, index) => (
            <div className="circle" key={index}></div>
          ))
        }
        <div className="line"></div>
      </div>
      <div className="text_area">
        {
          Array(routeCount).fill(0).map((_, index) => (
            <div className="text" key={index}>뭐지 </div>
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
  }
  .text_area .text {
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

  .marker_area .circle {
    border: 3px solid #E85239;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
  }

  .marker_area .line {
    height: inherit;
    width: 2px;
    background-color: #E85239;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
  }
`
