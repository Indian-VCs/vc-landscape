import * as React from "react";
import * as Types from "./types";

declare function Grid(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  columnCount?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
  content?: React.ReactNode;
}): React.JSX.Element;
