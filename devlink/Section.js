"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Spacer } from "./Spacer";
import * as _utils from "./utils";
import _styles from "./Section.module.css";

export function Section({
  as: _Component = _Builtin.DOM,
  visibility = true,
  theme = "Inherit",
  paddingBottom = null,
  paddingTop = null,
  sectionClasses,
  containerClasses = "u-container u-margin-trim",
  style,
  tag = "section",
  attributeName,
  attributeValue,
  idAttributeName,
  idAttributeValue,
  content,
  background,
}) {
  const _styleVariantMap = {
    Inherit: "",
    Light: "w-variant-a4eabb01-8ed6-63d0-157e-0a7b56aedaa1",
    Dark: "w-variant-857e5430-97c7-deb6-3c1a-d3063f9fe2c7",
    Brand: "w-variant-25bf08d9-3196-322b-5616-019ac7f0f4f7",
  };

  const _activeStyleVariant = _styleVariantMap[theme];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-section", _activeStyleVariant)}
      slot=""
      tag={tag}
      _class={sectionClasses}
      style={style}
    >
      {background}
      <Spacer sectionSpace={paddingTop} />
      {content}
      <Spacer sectionSpace={paddingBottom} />
    </_Component>
  ) : null;
}
