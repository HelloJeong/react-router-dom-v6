import React from "react";
import { Route, Routes } from "react-router";
import { RouteType } from "../types";

type PropsType = {
  routes: RouteType[];
  NotFoundPage: any;
};

const RouterView: React.FC<PropsType> = ({ routes, NotFoundPage }) => {
  const renderRoute = (routes: RouteType[]) => {
    return routes.map((r) => {
      console.log("r", r);
      if (!r.children) {
        return <Route key={r.name} path={r.path} element={<r.component />} />;
      }
      return (
        <Route key={r.name} path={r.path}>
          <r.component>
            <Routes>
              {renderRoute(r.children)}
              <Route element={NotFoundPage} />
            </Routes>
          </r.component>
        </Route>
      );
    });
  };
  return (
    <Routes>
      {renderRoute(routes)}
      <Route element={NotFoundPage} />
    </Routes>
  );
};

export default React.memo(RouterView);
