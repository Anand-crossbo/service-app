import { createBrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import Home from "./components/Home";
import RoomService from "./components/RoomService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cards",
        element: <Cards />
    },
    {
        path: "/roomservice",
        element: <RoomService />
    },
])