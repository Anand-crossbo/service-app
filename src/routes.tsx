import { createBrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import Home from "./components/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cards",
        element: <Cards />
    },
])