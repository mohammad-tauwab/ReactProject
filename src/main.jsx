import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./component/CreatePost.jsx";
import Post from "./component/Post.jsx";
const routerPath = [
  // defining the route path
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Post></Post>,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
];
const router = createBrowserRouter(routerPath);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
