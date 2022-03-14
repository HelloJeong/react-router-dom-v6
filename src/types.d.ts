import { LoadableComponent } from "@loadable/component";
import { FC, NamedExoticComponent } from "react";

type RouteType = {
  name: string;
  path: string;
  component: FC<any> | NamedExoticComponent<any> | LoadableComponent<any>;
  children?: RouteType[];
};
