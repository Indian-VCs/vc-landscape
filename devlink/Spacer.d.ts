import * as React from "react";

declare function Spacer(props: {
  as?: React.ElementType;
  sectionSpace?:
    | "None"
    | "Even"
    | "Small"
    | "Main"
    | "Large"
    | "Page Top"
    | "48px";
}): React.JSX.Element;
