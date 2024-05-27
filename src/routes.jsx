import {
  HomeIcon,
  UserCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UsersIcon,
  PresentationChartBarIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Avaleht",
        path: "/home",
        element: <Home />,
      },
      /*{
        icon: <UserCircleIcon {...icon} />,
        name: "Profiil",
        path: "/profile",
        element: <Profile />,
      },*/
      {
        icon: <ChartBarIcon {...icon} />,
        name: "Tasemed",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <PresentationChartBarIcon {...icon} />,
        name: "Workshop",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Inimesed",
        path: "/tables",
        element: <Tables />,
      },
      
    ],
  },
  /* 
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },*/
];

export default routes;
