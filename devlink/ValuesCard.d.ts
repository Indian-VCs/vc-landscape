import * as React from "react";
import * as Types from "./types";

declare function ValuesCard(props: {
  as?: React.ElementType;
  valuesCardImage?: Types.Asset.Image;
  valuesCardHeading?: React.ReactNode;
  valuesCardPara?: React.ReactNode;
}): React.JSX.Element;
