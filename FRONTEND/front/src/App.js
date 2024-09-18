import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,

} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";

function App() {
 
  const currentUser = true

  const Layout = () => {
    return (
        <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Outlet/>
         </div>
        </div>
    );
  };
 
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
    children:[
     {
      path:"/",
      element: <Home/>
     },
     {
      path:"/profile/:id",
      element: <Profile/>
     }
    ]
   },
   {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;