"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LegalRichText.module.css";

export function LegalRichText({
  as: _Component = _Builtin.RichText,
  content = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "legal-rich-text")}
      tag="div"
      slot=""
    >
      {content}
    </_Component>
  );
}
