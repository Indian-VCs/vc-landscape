"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

export function Cta({
  as: _Component = _Builtin.Link,
  variant = "Base",
  linkText = "Discover more",

  link = {
    href: "#",
    target: "_blank",
  },
}) {
  const _styleVariantMap = {
    Base: "",
    "no-bg": "w-variant-7b211ba6-f9b4-9090-e5da-25cc3b7394bc",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "cta", _activeStyleVariant)}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cta_line", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cta_line_abs", _activeStyleVariant)}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
