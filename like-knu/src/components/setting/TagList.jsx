import styled from "styled-components";
import { useState } from "react";
import TAGNAME from "../../constants/tagName";
import { putTag } from "../../api/tag";
import colors from "../../constants/colors";
import Tag from "../styles/Tag";

const Id = "UUID";
const data = {
  deviceId: Id,
  Tags: [{ tag: "jcw" }],
};
export default function TagList() {
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIstChecked] = useState(false);

  const putData = async (data) => {
    await putTag(data);
    console.log("보냄");
  };

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
    <>
      <Form>
        {TAGNAME.map((tag, index) => (
          <div key={index}>
            <CheckBoxInput
              type="checkbox"
              id={index}
              name="NoticeTag"
              checked={checkedList.includes(index)}
              onChange={(e) => checkHandler(e, tag)}
            />
            <CheckBoxLabel htmlFor={index}>
              <CheckBoxText>{tag}</CheckBoxText>
            </CheckBoxLabel>
          </div>
        ))}
      </Form>
      <Button onClick={() => putData(data)}>제출</Button>
    </>
  );
}
const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${colors.COMMON};
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
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
    background-color: ${colors.COMMON};
    color: ${colors.WHITE};
  }
`;
const CheckBoxLabel = styled(Tag)``;
const CheckBoxText = styled.div``;
