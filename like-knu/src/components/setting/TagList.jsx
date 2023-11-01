import styled from "styled-components";
import {useCallback, useState} from "react";
import tagName from "../../constants/tagName";
import TagItem from "./TagItem";

export default function TagList() {

  const [checkedList, setCheckedList] = useState([]);

  const sendTagName = useCallback(
    (e) => {
      e.preventDefault();
      console.log('checkedList : ', checkedList);
    }
  )

  const onClick = (e) => {
    console.log(e.target.className);
  }
  return (
    <div>
      <TagContainer>
        {
          tagName.map((tag, index) => (
            <TagItem key={index} name={tag}/>
          ))
        }
      </TagContainer>
      <button onClick={onClick}>뭐야!</button>
    </div>
  )
}

const TagContainer = styled.div``
