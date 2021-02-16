import React, { MouseEventHandler } from "react";
import Button from "../common/Button";
import {
  ExpandIcon,
  PlayIcon,
  PauseIcon,
  ExternalLinkIcon,
} from "../../icons/Icons";
import styled, { css } from "styled-components";
import { NO_OP } from "../../data/constants";
import useToggle from "../../misc/useToggle";
import { fadeOut } from "../styled/animations";

const Wrapper = styled.div(
  (props: { isVisible: boolean }) => css`
    grid-area: 1/1/2/2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr) auto;

    ${!props.isVisible
      ? css`
          opacity: 0;
          animation: ${fadeOut} 0.4s ease-in-out;
        `
      : ""};
  `
);

const ProgressBar = styled.div(
  (props) => css`
    grid-area: 4/5/4/4;
    height: 5px;
    background-color: ${props.theme.colors.accentColor};
  `
);

const OverlayButton = styled(Button).attrs({ type: "invisible" })(
  (props) => css`
    width: max-content;
    height: max-content;
    padding: ${props.theme.dimensions.bigSpacing};
  `
);

const FullScreenButton = styled(OverlayButton)`
  grid-area: 1/1/2/2;
  place-self: start start;
`;

const OpenExternalButton = styled(OverlayButton)`
  grid-area: 3/1/4/1;
  place-self: end start;
`;

const PlayButton = styled(OverlayButton)`
  grid-area: 2/2/3/3;
  place-self: center center;
`;

interface OverlayProps {
  onFullscreen?: MouseEventHandler;
  openInNewTab: MouseEventHandler;
  togglePlay?: MouseEventHandler;
  isPaused?: boolean;
  isPlayable: boolean;
  currentTime?: number;
  duration?: number;
}

function Overlay(props: OverlayProps) {
  const {
    onFullscreen = NO_OP,
    togglePlay = NO_OP,
    isPaused = true,
    isPlayable = false,
    currentTime = 0,
    duration = null,
    openInNewTab,
  } = props;

  const [isVisible, toggleVisible] = useToggle();

  return (
    <Wrapper isVisible={isPaused || isVisible} onClick={toggleVisible}>
      {onFullscreen && (
        <FullScreenButton onClick={onFullscreen} label="Open Fullscreen">
          <ExpandIcon color="white" />
        </FullScreenButton>
      )}

      <OpenExternalButton onClick={openInNewTab} label="Open In New Tab">
        <ExternalLinkIcon color="white" />
      </OpenExternalButton>

      {isPlayable && (
        <>
          <PlayButton onClick={togglePlay} label="Play/Pause">
            {isPaused ? (
              <PlayIcon color="white" size={50} />
            ) : (
              <PauseIcon color="white" size={50} />
            )}
          </PlayButton>
          {!!duration && !!currentTime && (
            <ProgressBar
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Overlay;
