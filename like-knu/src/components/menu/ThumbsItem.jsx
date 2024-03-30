import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { menuThumbsAPI } from '../../api/menuAPI';
import { ReactComponent as ThumbsDownFill } from '../../assets/icon/hand-thumbs-down-fill.svg';
import { ReactComponent as ThumbsDown } from '../../assets/icon/hand-thumbs-down.svg';
import { ReactComponent as ThumbsUpFill } from '../../assets/icon/hand-thumbs-up-fill.svg';
import { ReactComponent as ThumbsUp } from '../../assets/icon/hand-thumbs-up.svg';
import colors from '../../constants/colors';
import { THUMBS_TYPE } from '../../constants/thumbs';
import { isDarkMode } from '../../utils/DeviceManageUtil';

const ThumbsItem = ({ menuId }) => {
  const [isThumbsUp, setThumbsUp] = useState(false);
  const [isThumbsDown, setThumbsDown] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);

  useEffect(() => {
    fetchMenuThumbs();
  }, []);

  const fetchMenuThumbs = async () => {
    const response = await menuThumbsAPI(menuId);

    setThumbsUpCount(response.thumbsUp);
    setThumbsDownCount(response.thumbsDown);
    const ownThumbs = response.ownThumbs;
    if (ownThumbs !== null) {
      ownThumbs === THUMBS_TYPE.THUMBS_UP ? setThumbsUp(true) : setThumbsDown(true);
    }
  };

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
        <ThumbsCount color={isThumbsUp ? '#3182F7' : '#7D7D85'}>{thumbsUpCount}</ThumbsCount>
      </Thumbs>
      <Thumbs onClick={thumbsDown}>
        <StyledThumbsDownFill color={isDarkMode() ? '#4D4D59' : '#D1D6DA'} isThumbsDown={isThumbsDown} />
        <ThumbsCount color={isThumbsDown ? '#F04452' : '#7D7D85'}>{thumbsDownCount}</ThumbsCount>
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
  color: ${(props) => props.color};
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
