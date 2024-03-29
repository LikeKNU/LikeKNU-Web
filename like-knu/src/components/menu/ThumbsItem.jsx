import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ThumbsDownFill } from '../../assets/icon/hand-thumbs-down-fill.svg';
import { ReactComponent as ThumbsDown } from '../../assets/icon/hand-thumbs-down.svg';
import { ReactComponent as ThumbsUpFill } from '../../assets/icon/hand-thumbs-up-fill.svg';
import { ReactComponent as ThumbsUp } from '../../assets/icon/hand-thumbs-up.svg';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

const ThumbsItem = () => {
  const [isThumbsUp, setThumbsUp] = useState(false);
  const [isThumbsDown, setThumbsDown] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);

  const thumbsUp = () => {
    if (isThumbsDown) {
      cancelThumbsDown();
    }

    isThumbsUp ? decreaseThumbsCount(setThumbsUpCount) : increaseThumbsCount(setThumbsUpCount);
    setThumbsUp(!isThumbsUp);
  };

  const thumbsDown = () => {
    if (isThumbsUp) {
      cancelThumbsUp();
    }

    isThumbsDown ? decreaseThumbsCount(setThumbsDownCount) : increaseThumbsCount(setThumbsDownCount);
    setThumbsDown(!isThumbsDown);
  };

  const cancelThumbsUp = () => {
    decreaseThumbsCount(setThumbsUpCount);
    setThumbsUp(false);
  };

  const cancelThumbsDown = () => {
    decreaseThumbsCount(setThumbsDownCount);
    setThumbsDown(false);
  };

  const increaseThumbsCount = (setState) => {
    setState(prevState => prevState + 1);
  };

  const decreaseThumbsCount = (setState) => {
    setState(prevState => prevState - 1);
  };

  return (
    <Wrapper>
      <Thumbs onClick={thumbsUp}>
        <StyledThumbsUpFill color={isDarkMode() ? '#4D4D59' : '#D1D6DA'} isThumbsUp={isThumbsUp} />
        <ThumbsCount>{thumbsUpCount}</ThumbsCount>
      </Thumbs>
      <Thumbs onClick={thumbsDown}>
        <StyledThumbsDownFill color={isDarkMode() ? '#4D4D59' : '#D1D6DA'} isThumbsDown={isThumbsDown} />
        <ThumbsCount>{thumbsDownCount}</ThumbsCount>
      </Thumbs>
    </Wrapper>
  );
};

export default ThumbsItem;

const Wrapper = styled.div`
  position: absolute;
  bottom: 14px;
  right: 18px;
  display: flex;
`;

const ThumbsCount = styled.div`
  color: #7D7D85;
  font-weight: 400;
  margin-left: 2px;
`;

const Thumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;

const StyledThumbsUpFill = styled(ThumbsUpFill)`
  fill: ${(props) => props.isThumbsUp ? '#3182F7' : props.color};
  width: 24px;
  height: 24px;
`;

const StyledThumbsDownFill = styled(ThumbsDownFill)`
  fill: ${(props) => props.isThumbsDown ? '#F04452' : props.color};
  width: 24px;
  height: 24px;
`;

const StyledThumbsUp = styled(ThumbsUp)`
  fill: ${colors.GRAY500};
  width: 24px;
  height: 24px;
`;

const StyledThumbsDown = styled(ThumbsDown)`
  fill: ${colors.GRAY500};
  width: 24px;
  height: 24px;
`;
