import * as React from "react";
import * as Types from "./types";

declare function ThemeCardBlockComponent(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  headingTitle?: React.ReactNode;
  shortParagraphDescription?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
