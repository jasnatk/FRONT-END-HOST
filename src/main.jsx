import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/product-details/:productId",
    element: <ProductDetails />
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
