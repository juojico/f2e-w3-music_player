import React, { useState } from "react";
import styled from "styled-components";
import AlbumContainer from "./AlbumContainer";
import BrowseContainer from "./BrowseContainer";
import PlayerContainer from "./PlayerContainer";
import MainMenuContainer from "./MainMenuContainer";
import { BROWSE_DATA, ALL_ALBUM } from "../MockData";

const MainWrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 750px;
  margin: auto;
  background: radial-gradient(circle, #393e46 0%, #222831 100%);
  background-size: 100vw 50vw;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  color: white;
  overflow: hidden;
`;

const Main = () => {
  const [isPagesOpen, setPagesOpen] = useState([0, 1, 0, 1]);
  const [nowPlayAlbun, setNowPlayAlbun] = useState('taylor');
  const [nowPlaySong, setNowPlaySong] = useState(0);

  const handleClick = status => {
    setPagesOpen(status);
  };

  return (
    <MainWrapper>
      <AlbumContainer open={isPagesOpen[0]} />
      <BrowseContainer open={isPagesOpen[1]} data={BROWSE_DATA} />
      <PlayerContainer open={isPagesOpen[2]} data={ALL_ALBUM[nowPlayAlbun]} song={nowPlaySong} onClick={()=>handleClick([0,0,1,0])} onClose={()=>handleClick([0,1,0,1])}/>
      <MainMenuContainer open={isPagesOpen[3]} />
    </MainWrapper>
  );
};

export default Main;
