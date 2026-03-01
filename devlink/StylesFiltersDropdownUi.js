"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StylesFiltersDropdownUi.module.css";

export function StylesFiltersDropdownUi({
  as: _Component = _Builtin.HtmlEmbed,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "style")}
      content=""
      value="%3Cstyle%3E%0A%20%20%40media%20(min-width%3A%20992px)%7B%0A%20%20%20%20body%3Ahas(.filter_link.active-dd)%20.filter_link.active-dd%20.dd_filters_wrap%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20body%3Ahas(.filter_link.active-dd)%20.black-overlay%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20(max-width%3A%20991px)%7B%0A%20%20%20%20body%3Ahas(.filter_link.active-dd)%20.filter_link.active-dd%20.dd_filters_wrap%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%20%20body%3Ahas(.filters_ui.show)%20.black-overlay%7B%0A%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20body%3Ahas(.filters_ui.show)%20.section_filters_wrap%7B%0A%20%20%20%20%20%20z-index%3A%20999%3B%0A%20%20%20%20%7D%0A%20%20%20%20%20body%3Ahas(.filters_ui.show)%20.navbar%7B%0A%20%20%20%20%20%20z-index%3A%20998%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
    />
  );
}
