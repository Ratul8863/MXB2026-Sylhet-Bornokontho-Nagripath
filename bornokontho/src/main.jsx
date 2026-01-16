import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


import { createBrowserRouter ,
  RouterProvider
} from "react-router-dom";
// import { RouterProvider } from "react-router";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Learn from './Pages/Learn/Learn';
import Add from './Pages/Add/Add';
import Show from './Pages/Show/Show';
import Signin from './Pages/Authentication/Signin';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Authentication/Login';
import PrivateRoute from './Routes/PrivateRoute';
import Addtest from './Pages/Add/Addtest';
import SylotiConverter from './Pages/Converter/SylotiConverter';
import History from './Pages/History/History';
import AboutUs from './Pages/About/AboutUs';
import PlayGame from './Pages/PlayGame/PlayGame';
import UserManual from './Pages/PlayGame/UserManual';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {path:"/",
        // loader : () => {
        //   return fetch("https://bornokontho-server.vercel.app/letters/home")
        // },  
      element:<Home></Home>
      },
      {path:"learn",
      element:<Learn></Learn>
      },
       {path:"add",
      element:<PrivateRoute ><Add></Add></PrivateRoute>
      },
       {path:"show",
      element:<Show></Show>
      },
       {path:"signin",
      element:<Signin></Signin>
      },
       {path:"login",
      element:<Login></Login>
      },
       {path:"addtest",
      element:<Addtest></Addtest>
      },
       {path:"converter",
      element:<SylotiConverter></SylotiConverter>
      },
       {path:"history",
      element:<History></History>
      },
       {path:"about",
      element:<AboutUs></AboutUs>
      },
       {path:"play-game",
      element:<PrivateRoute ><PlayGame></PlayGame></PrivateRoute>
      },
       {path:"user-manual",
      element:<UserManual></UserManual>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
)
