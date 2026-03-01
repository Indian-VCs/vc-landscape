"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonWrapper.module.css";

export function ButtonWrapper({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes,
  style,
  tag = "div",
  content,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-button-group")}
      slot=""
      tag={tag}
      _class={classes}
      style={style}
    >
      {content}
    </_Component>
  ) : null;
}
