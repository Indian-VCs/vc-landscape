import * as React from "react";
import * as Types from "./types";

declare function ContentWrapper(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  alignment?: "Inherit" | "Left" | "Center" | "Right";
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
  content?: React.ReactNode;
}): React.JSX.Element;
