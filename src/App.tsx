import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import RouterView from "./components/RouterView";
import NotFound from "./pages/NotFound";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {routes.map((route, idx) => (
            <li key={`nav-${idx}`}>
              <NavLink
                to={route.path}
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <RouterView routes={routes} NotFoundPage={NotFound} />
      </div>
    </BrowserRouter>
  );
}

export default App;
