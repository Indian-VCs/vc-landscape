"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LinkExternal.module.css";

export function LinkExternal({
  as: _Component = _Builtin.Link,
  linkText = "This is some text inside of a div block.",

  websiteLink = {
    href: "#",
    target: "_blank",
  },

  fontWeightClass,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "ext-link",
        "u-text-style-small",
        "u-text-transform-uppercase"
      )}
      button={false}
      target="_blank"
      block="inline"
      options={websiteLink}
    >
      <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
    </_Component>
  );
}
