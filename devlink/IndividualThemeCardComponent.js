"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IndividualThemeCardComponent.module.css";

export function IndividualThemeCardComponent({
  as: _Component = _Builtin.Block,
  headingTitle = "Funds that lead pre-seeds",
  shortParagraphContent = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "theme_card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "theme_card_image_wrap")}
        id={_utils.cx(
          _styles,
          "w-node-fc01c47b-3312-cafb-0759-1a0f24255f6d-24255f6c"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "theme_card_image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/68dbc9d7f6eae31a84cabcd0_dummy-1.png"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "g-image-overlay")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "theme_card_content_wrap")}
        id={_utils.cx(
          _styles,
          "w-node-fc01c47b-3312-cafb-0759-1a0f24255f70-24255f6c"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "theme_card_content_heading",
            "u-text-style-h5"
          )}
          id={_utils.cx(
            _styles,
            "w-node-fc01c47b-3312-cafb-0759-1a0f24255f71-24255f6c"
          )}
          tag="h3"
        >
          {headingTitle}
        </_Builtin.Heading>
        <_Builtin.RichText
          className={_utils.cx(
            _styles,
            "theme_card_content_para",
            "u-text-style-main"
          )}
          id={_utils.cx(
            _styles,
            "w-node-fc01c47b-3312-cafb-0759-1a0f24255f73-24255f6c"
          )}
          tag="div"
          slot=""
        >
          {shortParagraphContent}
        </_Builtin.RichText>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "theme_card_funds_count",
          "u-text-style-main",
          "u-text-transform-uppercase"
        )}
        id={_utils.cx(
          _styles,
          "w-node-fc01c47b-3312-cafb-0759-1a0f24255f76-24255f6c"
        )}
        tag="div"
      >
        {"73 Funds"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "theme_card_divider")}
        id={_utils.cx(
          _styles,
          "w-node-fc01c47b-3312-cafb-0759-1a0f24255f78-24255f6c"
        )}
        tag="div"
      />
    </_Component>
  );
}
