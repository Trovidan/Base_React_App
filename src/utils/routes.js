//routes for application
import ExamplePage from "../pages/example_page";

export const app_routes = [
  {
    path: "/",
    onLogged: true,
    universal: true,
    fallback: "/",
    Component: ExamplePage,
    exact: false,
  },
];