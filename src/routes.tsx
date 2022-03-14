import Loading from "./pages/Loading";
import loadable from "@loadable/component";
import { RouteType } from "./types";

const routes: RouteType[] = [
  {
    name: "home",
    path: "/home",
    component: loadable(() => import("./pages/Home"), {
      fallback: <Loading />,
    }),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: loadable(() => import("./pages/Dashboard"), {
      fallback: <Loading />,
    }),
  },
  {
    name: "about",
    path: "/about",
    component: loadable(() => import("./pages/About"), {
      fallback: <Loading />,
    }),
  },
];

export default routes;
