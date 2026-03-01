import * as React from "react";
import * as Types from "./types";

declare function TypographyPlain(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  fontStyle?:
    | "Inherit"
    | "Text Small"
    | "Text Main"
    | "Text Large"
    | "H6"
    | "H5"
    | "H4"
    | "H3"
    | "H2"
    | "H1"
    | "Display";
  text?: React.ReactNode;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
}): React.JSX.Element;
