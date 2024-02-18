import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { putTag, tags } from '../../api/tag';
import colors from '../../constants/colors';
import TAGNAME from '../../constants/tagName';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import GlobalColor from '../styles/globalColor';
import Tag from '../styles/Tag';

export default function TagList() {
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIstChecked] = useState(false);

  const putData = async () => {
    const tags = [];
    checkedList.forEach((tagName) => {
      tags.push({ tag: tagName });
    });
    await putTag(tags);
    alert('설정되었습니다.');
  };

  const getTags = async () => {
    const res = await tags();
    setCheckedList(generateTagNameList(res));
  };
  const generateTagNameList = (res) => {
    let nameList = [];
    res.map((name) => {
      nameList.push(name.tag);
    });
    return nameList;
  };

  useEffect(() => {
    getTags();
  }, []);

  const checkedItemHandler = (value, isChecked) => {
    // 배열에 추가
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      console.log(checkedList);
      return;
    }

    // 배열에서 삭제
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      console.log(checkedList);
    }
  };

  const checkHandler = (e, value) => {
    setIstChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
    console.log(value, e.target.checked);
  };

  return (
    <Wrapper>
      <Form>
        {TAGNAME.map((tag, index) => (
          <div key={index}>
            <CheckBoxInput
              type="checkbox"
              id={index}
              name="NoticeTag"
              checked={checkedList.includes(tag)}
              onChange={(e) => checkHandler(e, tag)}
            />
            <CheckBoxLabel htmlFor={index}>
              <CheckBoxText>{tag}</CheckBoxText>
            </CheckBoxLabel>
          </div>
        ))}
      </Form>
      <Button onClick={() => putData()}>확 인</Button>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Button = styled.button`
  ${`width: calc(100% - 32px)`};
  height: 46px;
  background-color: ${GlobalColor.getColor()};
  border-radius: 13px;

  position: absolute;
  bottom: 20px;
  left: 50%;

  font-size: 1.6rem;
  font-weight: 700;
  transform: translate(-50%, 0);

  color: ${colors.WHITE};
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px 12px;
`;
const CheckBoxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:checked + label {
    background-color: ${GlobalColor.getColor()};
    color: ${colors.WHITE};
  }
`;
const CheckBoxLabel = styled(Tag)``;
const CheckBoxText = styled.div``;
