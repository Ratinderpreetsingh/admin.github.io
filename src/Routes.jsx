import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Sidebar/Dashboard';
import Users from './Components/Sidebar/Users';
import Settings from './Components/Sidebar/Setting';
import Product from './Pages/Product/Product';
import Category from './Pages/Category/Category';
import View_Product from './Pages/Product/View_Product';
import Login from './Pages/Login/Login'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Order from './Pages/Order/Order'
import OrderView from './Pages/Order/OrderView';
const RoutesSidebar = () => {
  return (
    <Routes>
      <Route path='/login'              element={<Login />} />
      <Route path="/"                   element={<ProtectedRoutes><Dashboard />  </ProtectedRoutes> } />
      <Route path="/users"              element={<ProtectedRoutes><Users />      </ProtectedRoutes>}/>
      <Route path="/settings"           element={<ProtectedRoutes><Settings />   </ProtectedRoutes> }  />

      {/* products */}
      <Route  path="/products"          element={<ProtectedRoutes><Product  />   </ProtectedRoutes>   } />
      <Route path="/product-view/:id"   element={<ProtectedRoutes><View_Product /></ProtectedRoutes>  } />

      {/* category */}
      <Route path='/category'           element={<ProtectedRoutes><Category />    </ProtectedRoutes>} />

      {/* order */}
      <Route path='/order'              element={<ProtectedRoutes><Order />       </ProtectedRoutes>} />
      <Route path="/order_view/:id"   element={<ProtectedRoutes><OrderView/></ProtectedRoutes>  } />


    </Routes>
  );
};

export default RoutesSidebar;
