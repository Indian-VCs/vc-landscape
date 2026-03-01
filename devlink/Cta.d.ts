import * as React from "react";
import * as Types from "./types";

declare function Cta(props: {
  as?: React.ElementType;
  variant?: "Base" | "no-bg";
  linkText?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
