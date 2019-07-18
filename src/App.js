import React from "react";
import Header from "./components/Header";
import Photo from "./components/Photo";
import Message from "./components/Message";
import Text from "./components/Text"

import styled from 'styled-components';


const HeadStyle = styled.div`
background-color: grey;
color: white;
text-align: center;
`
const PhotoStyle = styled.div`

.photo img {
  max-width: 50%;
  max-height: 10%;
  border: solid 10px;
}
`
const TextStyle = styled.div`

.credits {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    
  }
`

function App() {

 

  return (
    <div class="App">
      <HeadStyle><Header /></HeadStyle>
      <TextStyle><Text /></TextStyle>
      <PhotoStyle><Photo /></PhotoStyle>
      <Message/>
    </div>
  )
}

export default App;
