import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";

import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Shope from "./components/Shope/Shope"
import AuthProvider from "./context/Auth/Auth";
import ProticteRoute from "./pages/ProticteRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Payment from "./components/Payment/Payment";
import Data from "./components/Data/Data";
import Review from "./components/Review/Review";
import Thankyou from "./components/Thankyou/Thankyou";
import Signup from "./pages/Signup";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";







function App() {
  let queryClient = new QueryClient()

  let routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children:
        [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/register",
            element: <Register />
          },
          {
            path: "/signup",
            element: <Signup />
          },

          {
            path: "/signin",
            element: <Signin/>
          },

         

          {
            path: "/thank_you",
            element: <ProticteRoute><Thankyou /></ProticteRoute>
          },
          {

            path: '/category/:id', element: <ProticteRoute><Products /></ProticteRoute>



          },

          {

            path: '/search', element: <ProticteRoute><Search/></ProticteRoute>



          },

          {

            path: '/cart', element: <ProticteRoute><Cart /></ProticteRoute>



          },

          {

            path: '/payment', element: <ProticteRoute><Payment /></ProticteRoute>



          },

          {

            path: '/review', element: <ProticteRoute><Review /></ProticteRoute>



          },

          {

            path: '/data', element: <ProticteRoute><Data /></ProticteRoute>



          },
          {

            path: "/shope/:id", element: <ProticteRoute><Shope /></ProticteRoute>

          },

          {
            path: "*",
            element: <NotFound />
          }
        ]
    }
  ])
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <CartProvider>
          <AuthProvider>
            <RouterProvider router={routers} />
          </AuthProvider>
        </CartProvider>
      </QueryClientProvider>

    </>
  );
}

export default App;
