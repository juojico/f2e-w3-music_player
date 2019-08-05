import React, { useState } from "react";
import styled from "styled-components";
import AdContainer from "./AdContainer";
import AlbumContainer from "./AlbumContainer";
import BrowseContainer from "./BrowseContainer";
import PlayerContainer from "./PlayerContainer";
import SingerContainer from "./SingerContainer";
import MainMenuContainer from "./MainMenuContainer";
import { ALL_ALBUM } from "../MockData";

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
  const [isPagesOpen, setPagesOpen] = useState({
    album: false,
    browse: true,
    player: false,
    menu: true,
    ad: false,
    singer: false
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [nowPlayAlbum, setNowPlayAlbum] = useState("taylor");
  const [pickAlbum, setPickAlbum] = useState("taylor");
  const [nowPlaySong, setNowPlaySong] = useState("The Archer");

  const handleClick = status => {
    setPagesOpen(status);
  };

  const handlePick = name => {
    setPickAlbum(name);
    setPagesOpen({ ...isPagesOpen, album: true, browse: false });
  };

  const handleOnPlay = (album, song) => {
    setNowPlayAlbum(album);
    setNowPlaySong(song);
  };

  return (
    <MainWrapper>
      <AdContainer
        open={isPagesOpen.ad}
        onClose={() => setPagesOpen({ ...isPagesOpen, ad: false })}
      />
      <AlbumContainer
        open={isPagesOpen.album}
        data={ALL_ALBUM[pickAlbum]}
        pickAlbum={pickAlbum}
        nowPlaySong={nowPlaySong}
        onClose={() =>
          handleClick({ ...isPagesOpen, album: false, browse: true })
        }
        openSinger={() =>
          handleClick({ ...isPagesOpen, album: false, singer: true })
        }
        onPlay={handleOnPlay}
        isPlaying={isPlaying}
      />
      <BrowseContainer open={isPagesOpen.browse} onPick={handlePick} />
      <SingerContainer
        open={isPagesOpen.singer}
        onClose={() =>
          handleClick({ ...isPagesOpen, album: true, singer: false })
        }
      />
      <PlayerContainer
        open={isPagesOpen.player}
        data={ALL_ALBUM[nowPlayAlbum]}
        song={nowPlaySong}
        onOpen={() =>
          handleClick({
            ...isPagesOpen,
            album: false,
            browse: false,
            player: true,
            menu: false
          })
        }
        onClose={() =>
          handleClick({
            ...isPagesOpen,
            album: false,
            browse: true,
            player: false,
            menu: true
          })
        }
        isPlaying={statu => setIsPlaying(statu)}
        openAd={() => setPagesOpen({ ...isPagesOpen, ad: true })}
      />
      <MainMenuContainer open={isPagesOpen.menu} />
    </MainWrapper>
  );
};

export default Main;
