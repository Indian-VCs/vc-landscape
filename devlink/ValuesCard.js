"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ValuesCard.module.css";

export function ValuesCard({
  as: _Component = _Builtin.Block,
  valuesCardImage = "https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/68e511129e778a67998dac19_give%20first.png",
  valuesCardHeading = "Give first",
  valuesCardPara = "We help without expecting in return.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "g_text-block_wrap", "is-about", "is-card")}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-3")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={valuesCardImage}
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "g_text-block_small_wrap",
          "is-fundamentals"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "values_card-heading",
            "u-text-style-h5"
          )}
          tag="h3"
        >
          {valuesCardHeading}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "values_card-para",
            "u-text-style-main"
          )}
          tag="div"
        >
          {valuesCardPara}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
