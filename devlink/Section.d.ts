import * as React from "react";
import * as Types from "./types";

declare function Section(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  theme?: "Inherit" | "Light" | "Dark" | "Brand";
  paddingBottom?:
    | "None"
    | "Even"
    | "Small"
    | "Main"
    | "Large"
    | "Page Top"
    | "48px";
  paddingTop?:
    | "None"
    | "Even"
    | "Small"
    | "Main"
    | "Large"
    | "Page Top"
    | "48px";
  sectionClasses?: Types.Builtin.Text;
  containerClasses?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  /** Type "id" in this field when applying an id to the section*/
  idAttributeName?: Types.Builtin.Text;
  idAttributeValue?: Types.Basic.IdTextInput;
  content?: React.ReactNode;
  background?: React.ReactNode;
}): React.JSX.Element;
