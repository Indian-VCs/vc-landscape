"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ThemeCardBlockComponent.module.css";

export function ThemeCardBlockComponent({
  as: _Component = _Builtin.Section,
  heading = "Round-focused themes",
  headingTitle = "Funds that lead pre-seeds",
  shortParagraphDescription = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_theme")}
      id={_utils.cx(
        _styles,
        "w-node-_2851a981-aacb-25a2-6a08-246cbeecd36e-beecd36e"
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "u-container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "theme_wrap")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "home_heading_wrap")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "home_heading", "u-text-style-h3")}
              tag="h2"
            >
              {heading}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "home_heading_line")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "style")}
            content=""
            value="%3Cstyle%3E%0A%09.theme_card%3Alast-child%20.theme_card_divider%7B%0A%20%20%09display%3A%20none%3B%0A%20%20%7D%0A%20%20%0A%20%20.theme_card%3Ahover%7B%0A%20%20%09background%3A%20var(--swatch--sc-dark-cocoa)%3B%0A%20%20%20%20color%3A%20var(--swatch--sc-pearl-cream)%3B%0A%20%20%7D%0A%20%20.theme_card%3Ahover%20.theme_card_funds_count%7B%0A%20%20%20%20color%3A%20var(--swatch--sc-pearl-cream)%3B%0A%20%20%7D%0A%20%20.theme_card%3Ahover%20.theme_card_image%7B%0A%20%20%20%20transform%3A%20scale(1.1)%3B%0A%20%20%7D%0A%20%0A%20%20%0A%0A%3C%2Fstyle%3E"
          />
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
