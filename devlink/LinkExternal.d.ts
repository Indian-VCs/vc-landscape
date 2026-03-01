import * as React from "react";
import * as Types from "./types";

declare function LinkExternal(props: {
  as?: React.ElementType;
  linkText?: React.ReactNode;
  websiteLink?: Types.Basic.Link;
  fontWeightClass?: Types.Builtin.Text;
}): React.JSX.Element;
