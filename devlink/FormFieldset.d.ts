import * as React from "react";
import * as Types from "./types";

declare function FormFieldset(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  formRadioFormCheckbox?: React.ReactNode;
  legend?: React.ReactNode;
}): React.JSX.Element;
