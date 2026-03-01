import * as React from "react";
import * as Types from "./types";

declare function TypographyParagraph(props: {
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
  text?: Types.Basic.RichTextChildren;
  classes?: Types.Builtin.Text;
  id?: Types.Basic.IdTextInput;
}): React.JSX.Element;
