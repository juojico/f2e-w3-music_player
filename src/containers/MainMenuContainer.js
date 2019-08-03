import React from "react";
import styled from "styled-components";
import like from "../media/slice/icons_like.svg";
import likeOn from "../media/slice/icons_like_on.svg";
import browse from "../media/slice/icons_browse.svg";
import browseOn from "../media/slice/icons_browse_on.svg";
import search from "../media/slice/icons_search.svg";
import searchOn from "../media/slice/icons_search_on.svg";

const MenuWrapper = styled.div`
  position: fixed;
  background: #222831;
  width: 100%;
  max-width: 750px;
  height: 84px;
  bottom: 0;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
`;

const MenuIcon = styled.div`
  position: relative;
  width: 46px;
  height: 56px;
  background: url('${props => (props.active ? props.actImg : props.img)}');
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  opacity: ${props => (props.active ? 1 : 0.3)};
  cursor: pointer;
  &::before {
    position: absolute;
    content: '${props => props.text}';
    bottom: 0;
    left: 0;
    width: 100%;
    txet-align: center;
    font-size: 8px;
  }
`;

const MainMenu = props => {
  const { open } = props;
  return (
    <>
      {open ? (
        <MenuWrapper>
          <MenuIcon img={like} actImg={likeOn} text='音樂庫' />
          <MenuIcon img={browse} actImg={browseOn} text='瀏覽' active />
          <MenuIcon img={search} actImg={searchOn} text='搜尋' />
        </MenuWrapper>
      ) : (
        console.log("mainMenu close")
      )}
    </>
  );
};

export default MainMenu;
