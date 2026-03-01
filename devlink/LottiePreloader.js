"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LottiePreloader.module.css";

export function LottiePreloader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "lottie-embed_wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "lottie-embed_wrap")}
        tag="div"
        id="lottie-transition"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "ed_logo_brand")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/698c29be2aa0dc2530f95dec_edLogo.webp"
      />
    </_Component>
  );
}
