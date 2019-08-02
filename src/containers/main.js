import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AlbumContainer from './AlbumContainer';
import BrowseContainer from './BrowseContainer';
import PlayerContainer from './PlayerContainer';
import MainMenuContainer from './MainMenuContainer';

const MainWrapper = styled.div`
    height: 100vh;
    background: radial-gradient(circle, #393E46 0%, #222831 100%);
    background-size: 100vw 50vw;
    color: white;
    text-align: center;
`

const Main = () =>{
    const [musicList,setMusicList] = useState([]);
    return <MainWrapper><AlbumContainer /><BrowseContainer /><PlayerContainer /><MainMenuContainer /></MainWrapper>
}

export default Main;