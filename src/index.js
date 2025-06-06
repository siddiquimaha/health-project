import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Productlist from './pages/Productlist';
import { CartProvider } from './context/CartContext';
import SignUp from './pages/signup';
import Getproducts from './pages/Getproducts';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {path:'/', element:<App/>},
    {path:'about-us', element:<Aboutus/>},
    {path:'add-products', element:<Productlist/>},
    {path:'sign-up', element:<SignUp/>},
    {path: '/get-products', element:<Getproducts/>}
  ]
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={allRoutes}>
      </RouterProvider>
    </CartProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
