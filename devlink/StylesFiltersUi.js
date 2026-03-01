"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StylesFiltersUi.module.css";

export function StylesFiltersUi({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "style")}
      content=""
      value="%3Cstyle%3E%0A%20%20%40media%20(min-width%3A%201440px)%7B%0A%20%20%20%20.filter_link%3Ahover%2C%20.filter_link.active-dd%2C%20.filter_link%3Ahas(input%5Btype%3D'number'%5D%3Anot(%3Aplaceholder-shown))%7B%0A%20%20%20%20%20%20padding%3A%200.5rem%201rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40media%20(min-width%3A%20992px)%7B%0A%20%20%20%20.filter_link%3Ahover%2C%20.filter_link.active-dd%2C%20.filter_link%3Ahas(.dd_filters_list%20input%5Btype%3D'checkbox'%5D%3Achecked)%2C%20.filter_link%3Ahas(input%5Btype%3D'number'%5D%3Anot(%3Aplaceholder-shown))%7B%0A%20%20%20%20%20%20padding%3A%200.5rem%200.5em%3B%0A%20%20%20%20%20%20background%3A%20var(--swatch--sc-dark-cocoa)%3B%0A%20%20%20%20%20%20color%3A%20var(--swatch--sc-pearl-cream)%3B%0A%20%20%20%20%7D%0A%20%20%20%20.filter_link%3Ahover%20.filter_link_line%2C%20.filter_link.active-dd%20.filter_link_line%2C%20.filter_link%3Ahas(.dd_filters_list%20input%5Btype%3D'checkbox'%5D%3Achecked)%20.filter_link_line%2C%20.filter_link%3Ahas(input%5Btype%3D'number'%5D%3Anot(%3Aplaceholder-shown))%20.filter_link_line%7B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%7D%20%0A%20%20%7D%0A%20%20%40media%20(max-width%3A%20991px)%7B%0A%20%20%20%20.filters_ui.show%7B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20transform%3A%20translateY(0%25)%3B%0A%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.search-field%3Afocus-visible%7B%0A%20%20%20%20border%3A%200px%3B%0A%20%20%20%20outline%3A%200%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%0A%3Cstyle%3E%0A%20%20.table_content-row_item%3Alast-child%20.theme_card_divider%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
    />
  );
}
