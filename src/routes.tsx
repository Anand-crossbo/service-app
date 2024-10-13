import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import MainCard from "./components/cards/OldCards/MainCard";
import RoomServiceMain from "./components/roomservice/RoomServiceMain";
import MapProperty from "./components/map/MapProperty";
import ActivityMain from "./components/activity/ActivityMain";
import HomeCard from "./components/cards/HomeCard";
import ServicesCollection from "./components/cards/ServicesCollection";

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
        path: "/homecard",
        element: <HomeCard />
    },
    {
        path: "/servicescollection",
        element: <ServicesCollection />
    },
    {
        path: "/roomservicemain",
        element: <RoomServiceMain />
    },
    {
        path: "/mapproperty",
        element: <MapProperty />
    },
    {
        path: "/activity",
        element: <ActivityMain />
    }
])