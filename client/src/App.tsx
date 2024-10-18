import Login from "./auth/Login";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './auth/Signup';
import Forgetpassword from './auth/Forgotpassword';
import VerifyEmail from './auth/VerifyEmail';
import ResetPassword from "./auth/ResetPassword";
import MainLayout from "./Layout/Mainllayout";
import Profile from "./components/Profile";
import SearchPlace from "./components/SearchPlace";
import RastaurantDetails from "./components/RestaurantDetail";
import Card from "./components/Card";
import Restaurant from "./admin/Restaurant";
import HereSection from "./components/HereSection";
import Addmanu from "./admin/Addmanu";
import AdminOrders from "./admin/AdminOder";
import Order from "./components/order";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: <HereSection />,
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/search/:id",
        element:<SearchPlace/>
      },
      {
        path:"/restaurant/:id",
        element:<RastaurantDetails/>
      },
      {
        path:"/cart",
        element:<Card/>
      },
      // create admin section
      {
        path:"/admin/restaurant",
        element:<Restaurant/>
      },
      {
        path:"/admin/addmanu",
        element:<Addmanu/>
      },
      {
        path:"/admin/addmanu",
        element:<Addmanu/>
      },
      {
        path:"/admin/order",
        element:<AdminOrders/>
      },
      {
        path:"/order",
        element:<Order/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element : <Forgetpassword/>
  },
  {
    path:"/verify-email",
    element : <VerifyEmail/>
  },
  {
    path:"/reset-password",
    element : <ResetPassword/>
  },
])
function App() {
  return (
    <>
    <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
