import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import MainCard from "./components/cards/MainCard";
import RoomServiceMain from "./components/roomservice/RoomServiceMain";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/maincard",
        element: <MainCard />
    },
    {
        path: "/roomservicemain",
        element: <RoomServiceMain />
    },
])