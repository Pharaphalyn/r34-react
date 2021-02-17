import React from "react";
import styled, { css } from "styled-components";
import TagSelector from "../tagSelector/TagSelector";
import Options from "./Options";
import Title from "../common/Title";
import Surface from "../common/Surface";
import SearchButton from "./SearchButton";
import ActiveTags from "./ActiveTags";
import MaxWidthStyle from "../common/MaxWidthStyle";

const ConfigWrapper = styled.section(
  (props) => css`
    display: grid;
    gap: ${props.theme.dimensions.gutter};
    ${MaxWidthStyle}
  `
);

export default function Config(props: { onLoad: () => void }) {
  const { onLoad } = props;

  return (
    <ConfigWrapper>
      <Title>
        <label htmlFor="tag-input">Search</label>
      </Title>
      <Surface>
        <TagSelector />
        <ActiveTags onChange={onLoad} />
        <Options />
        <SearchButton />
      </Surface>
    </ConfigWrapper>
  );
}
