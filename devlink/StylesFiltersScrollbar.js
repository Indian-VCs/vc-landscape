"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StylesFiltersScrollbar.module.css";

export function StylesFiltersScrollbar({
  as: _Component = _Builtin.HtmlEmbed,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "style")}
      content=""
      value="%3Cstyle%3E%0A%20%20.dd_filters_list%3A%3Ascrollbar%2C%20.filters_ui%3A%3Ascrollbar%7B%0A%20%20%20%20width%3A%206px%3B%0A%20%20%20%20height%3A%206px%3B%0A%20%20%7D%0A%20%20.dd_filters_list%3A%3A-webkit-scrollbar%2C%20.filters_ui%3A%3A-webkit-scrollbar%7B%0A%20%20%20%20width%3A%206px%3B%0A%20%20%7D%0A%20%20.dd_filters_list%3A%3Ascrollbar-thumb%7B%0A%20%20%20%20background%3A%20white%3B%0A%20%20%7D%0A%20%20.dd_filters_list%3A%3A-webkit-scrollbar-thumb%2C%20.filters_ui%3A%3A-webkit-scrollbar-thumb%7B%0A%20%20%09background%3A%20white%3B%0A%20%20%7D%0A%0A%20%20.w-checkbox-input--inputType-custom.w--redirected-focus%7B%0A%20%20%20%20box-shadow%3A%20unset%3B%0A%20%20%20%20border-color%3A%20white%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%7D%0A%20%20.w-checkbox-input--inputType-custom.w--redirected-checked%7B%0A%20%20%20%20border-color%3A%20white%3B%0A%20%20%7D%0A%0A%3C%2Fstyle%3E"
    />
  );
}
