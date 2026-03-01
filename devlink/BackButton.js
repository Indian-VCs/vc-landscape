"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BackButton.module.css";

export function BackButton({
  as: _Component = _Builtin.Block,
  text = "Back",
  id,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "back-button",
        "u-text-transform-uppercase"
      )}
      tag="div"
      role="button"
      id={id}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "back-arrow")}
        content=""
        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2013%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cmask%20id%3D%22mask0_5522_1622%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2213%22%20height%3D%2224%22%3E%0A%20%20%20%20%3Crect%20width%3D%2213%22%20height%3D%2224%22%20fill%3D%22%23D9D9D9%22%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_5522_1622)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M9.99916%2021.3069L0.691406%2011.9992L9.99916%202.69141L11.0627%203.75491L2.81841%2011.9992L11.0627%2020.2434L9.99916%2021.3069Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "u-text-style-small")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
