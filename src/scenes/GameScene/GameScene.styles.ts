import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  body {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg, 
    #a8d5d5 0%,
    #b8e3c9 100%
  );
  overflow: hidden;
`;

export const Landscape = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: #8b5e3c;
`;

export const Trees = styled.div`
  position: absolute;
  bottom: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  
  div {
    width: 60px;
    height: 100px;
    background: #2d5a27;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const Character = styled.div`
  position: absolute;
  bottom: 30%;
  left: 20%;
  width: 50px;
  height: 100px;
  background: #ff9900;
`;

export const Dog = styled.div`
  position: absolute;
  bottom: 30%;
  left: 30%;
  width: 40px;
  height: 30px;
  background: #8b4513;
`;

export const Vehicle = styled.div`
  position: absolute;
  bottom: 30%;
  right: 20%;
  width: 120px;
  height: 60px;
  background: #cc0000;
`;

export const ClickText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Press Start 2P', cursive;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SpeechBubble = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  background: white;
  padding: 15px;
  border-radius: 20px;
  font-family: 'Press Start 2P', cursive;
  font-size: 14px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 20px;
    border: 10px solid transparent;
    border-top-color: white;
  }
`;