import * as React from "react";
import * as Types from "./types";

declare function NavLink(props: {
  as?: React.ElementType;
  navLinkText?: React.ReactNode;
  link?: Types.Basic.Link;
  _class?: Types.Builtin.Text;
}): React.JSX.Element;
