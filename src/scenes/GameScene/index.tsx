import React, { FC } from 'react';
import { GlobalStyle, SceneContainer, Landscape, Trees, Character, Dog, Vehicle, ClickText, SpeechBubble } from './GameScene.styles';

interface GameSceneProps {}

const GameScene: FC<GameSceneProps> = () => {
  return (
    <>
      <GlobalStyle />
      <SceneContainer>
        <Landscape />
        <Trees>
          <div />
          <div />
          <div />
        </Trees>
        <Character />
        <Dog />
        <Vehicle />
        <ClickText>Click Anywhere to start</ClickText>
        <SpeechBubble>
          Hey there Adventurer!
        </SpeechBubble>
      </SceneContainer>
    </>
  );
};

export default GameScene;