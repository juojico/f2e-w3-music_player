import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 7px;
  font-size: 16px;
`;

const More = styled.div`
  color: #29dde0;
  font-size: 9px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    text-shadow: 0 0 10px rgba(41, 221, 224, 0.5);
  }
`;

const TITLE = {
  recently: "最近播放",
  popular: "熱門專輯",
  mood: "心情音樂"
};

const BrowseTitle = props => {
  const { title, onClickMore } = props;
  return (
    <Title>
      {TITLE[title]}
      <More onClick={onClickMore}>顯示全部</More>
    </Title>
  );
};

export default BrowseTitle;
