import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Settings from "./pages/Settings";

export const links = [
  {
    label: "Dashboard",
    icon: <InboxIcon />,
    to: "/dashboard",
    component: <Dashboard />,
  },
  {
    label: "Products",
    icon: <MailIcon />,
    to: "/products",
    component: <Products />,
  },
  {
    label: "Settings",
    icon: <MailIcon />,
    to: "/settings",
    component: <Settings />,
  },
];
