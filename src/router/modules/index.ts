import Home from "@/views/dashboard";
import Login from "@/views/Login";
import User from "@/views/User";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    icon: '',
    meta: {
      title: "首页"
    }
  },
  {
    path: "/user",
    component: User,
    icon: '',
    meta: {
      title: "用户"
    }
  },
  {
    path: "/login",
    icon: '',
    component: Login
  },
];

export default routes;
