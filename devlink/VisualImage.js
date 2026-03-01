"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function VisualImage({
  as: _Component = _Builtin.Image,
  visibility = true,
  image = "https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/68d52ca33b12ca1b4495ce60_placeholder.svg",
  altText = "__wf_reserved_inherit",
  loading = "lazy",
  classes = "u-ratio-16-9 u-background-skeleton",
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "")}
      loading={loading}
      width="auto"
      height="auto"
      src={image}
    />
  ) : null;
}
