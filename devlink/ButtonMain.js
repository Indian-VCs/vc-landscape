"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./ButtonMain.module.css";

export function ButtonMain({
  as: _Component = _Builtin.DOM,
  visibility = true,
  style = "Primary",
  text = "Button Text",

  link = {
    href: "#",
  },

  type = "button",
  attributeName,
  attributeValue,
  classes,
  target,
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-e85564cd-af30-a478-692b-71732aefb3ab",
  };

  const _activeStyleVariant = _styleVariantMap[style];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "button_main_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      data-button=" "
      data-trigger="hover focus"
    >
      <Clickable
        screenReaderText={text}
        link={link}
        type={type}
        target={target}
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "button_main_text",
          "u-text-style-main",
          _activeStyleVariant
        )}
        tag="div"
        aria-hidden="true"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
