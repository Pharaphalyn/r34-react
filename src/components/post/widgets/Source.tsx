import React from "react";
import { formatSource } from "../../../misc/formatting";
import {
  LinkIcon,
  PixivIcon,
  SourceIcon,
  TwitterIcon,
} from "../../../icons/Icons";
import styled, { css } from "styled-components";
import IconAndText from "../../common/IconAndText";

const ColoredA = styled.a(
  (props) => css`
    color: ${props.color} !important;
    display: flex;
    gap: 5px;
  `
);

interface SourceProps {
  value: string;
}

export default ({ value }: SourceProps) => {
  if (value.startsWith("http")) {
    if (value.includes("twitter")) {
      return <TwitterLink value={value} />;
    }

    if (value.includes("pixiv")) {
      return <PixivSource value={value} />;
    }

    return <DefaultLink value={value} />;
  }

  return <FallbackSource value={value} />;
};

const FallbackSource = ({ value }: SourceProps) => {
  return (
    <IconAndText>
      <SourceIcon color="white" left />
      <span>{value}</span>
    </IconAndText>
  );
};

const DefaultLink = ({ value }: SourceProps) => {
  return (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="source"
    >
      <LinkIcon color="red" left />
      {formatSource(value)}
    </a>
  );
};

const TwitterLink = ({ value }: SourceProps) => {
  return (
    <ColoredA
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="source"
      color="rgb(29, 161, 242)"
    >
      <TwitterIcon color="rgb(29, 161, 242)" left />
      {value.split("twitter.com/")[1].split(" ")[0].split("?")[0].split("/")[0]}
    </ColoredA>
  );
};

const PixivSource = ({ value }: SourceProps) => {
  return (
    <ColoredA
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="source"
      color="rgb(29, 161, 242)"
    >
      <PixivIcon color="rgb(29, 161, 242)" left />
      <span>Pixiv</span>
    </ColoredA>
  );
};
