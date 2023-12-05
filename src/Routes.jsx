import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './Components/Sidebar/Setting';
import Product from './Pages/Product/Product';
import Category from './Pages/Category/Category';
import View_Product from './Pages/Product/View_Product';
import Login from './Pages/Login/Login'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Order from './Pages/Order/Order'
import OrderView from './Pages/Order/OrderView';
import User from './Pages/User/User';
import Dashbord from './Pages/Dashboard/Dashbord';
const RoutesSidebar = () => {
  return (
    <Routes>
      <Route path='/login'              element={<Login />} />
      <Route path="/"                   element={<ProtectedRoutes><Dashbord  />  </ProtectedRoutes> } />
      <Route path="/users"              element={<ProtectedRoutes><User />      </ProtectedRoutes>}/>

      {/* products */}
      <Route  path="/products"          element={<ProtectedRoutes><Product  />   </ProtectedRoutes>   } />
      <Route path="/product-view/:id"   element={<ProtectedRoutes><View_Product /></ProtectedRoutes>  } />

      {/* category */}
      <Route path='/category'           element={<ProtectedRoutes><Category />    </ProtectedRoutes>} />

      {/* order */}
      <Route path='/order'              element={<ProtectedRoutes><Order />       </ProtectedRoutes>} />
      <Route path="/order_view/:id"   element={<ProtectedRoutes><OrderView/></ProtectedRoutes>  } />

      <Route path="/settings"           element={<ProtectedRoutes><Settings />   </ProtectedRoutes> }  />
    
    </Routes>
  );
};

export default RoutesSidebar;
