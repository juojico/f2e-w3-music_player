import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const AlbumWrapper = styled.div`
    background: #222831;
    width: 100%;
    height: 84px;
    padding: 8px 32px;
    display: flex;
    justify-content: space-between;
`

const AlbumContainer = () =>{
    const [menu,setMenu] = useState([]);
    return <AlbumWrapper>AlbumContainer</AlbumWrapper>
}

export default AlbumContainer;