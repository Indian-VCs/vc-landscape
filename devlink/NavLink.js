"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavLink.module.css";

export function NavLink({
  as: _Component = _Builtin.Link,
  navLinkText = "Themes",

  link = {
    href: "#",
  },

  _class,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "nav_link",
        "u-text-style-medium",
        "u-text-transform-uppercase",
        "u-alignment-center"
      )}
      id={_utils.cx(
        _styles,
        "w-node-_79a65b27-6847-d8a0-cd2e-5c3ba67597ed-a67597ed"
      )}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_link_text_wrap")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "coming-soon")} tag="div">
          {"(Coming soon)"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_link_text")}
          tag="div"
        >
          {navLinkText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_link_text_line")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        content=""
        value="%3Cstyle%3E%0A.nav_link.is-disabled%7B%0A%09pointer-events%3A%20none%3B%0A%20%20opacity%3A%200.5%3B%0A%7D%0A%0A.nav_link.is-disabled%20.coming-soon%7B%0A%09display%3A%20block%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
