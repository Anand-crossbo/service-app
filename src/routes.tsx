import { createBrowserRouter } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Home from "./components/Home";
import RoomService from "./components/roomservice/RoomService";
import MainCard from "./components/cards/MainCard";
import RoomServiceMain from "./components/roomservice/RoomServiceMain";

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
    {
        path: "/maincard",
        element: <MainCard />
    },
    {
        path: "/roomservicemain",
        element: <RoomServiceMain />
    },
])