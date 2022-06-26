import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/user/Home/Home';
import Contact from './components/user/Contact/Contact';
import Cart from './components/user/Cart/Cart';
import Women from './components/user/Women/Women';
import Men from './components/user/Men/Men';
import Kids from './components/user/Kids/Kids';
import Baby from './components/user/Baby/Baby';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AdminDashboard from './components/admin/AdminDashboard/AdminDashboard';
import ProductManagement from './components/admin/ProductManagement/ProductManagement.js';
import Product from './components/user/Product/Product';
import UserInfo from './components/user/UserInfo/UserInfo.js';
import Statistical from './components/admin/Statistical/Statistical';
import AccountManagement from './components/admin/AccountManagement/AccountManagement';
import OrderManagement from './components/admin/OrderManagement/OrderManagement';
import Category from './components/admin/category/Category';


function App() {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/baby' element={<Baby />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/userInfo' element={<UserInfo />} />
        <Route path='/products/:id' element={<Product />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/productManagement' element={<ProductManagement />} />
        <Route path='/statistical' element={<Statistical />} />
        <Route path='/accountManagement' element={<AccountManagement />} />
        <Route path='/orderManagement' element={<OrderManagement />} />
        <Route path='/category' element={<Category />} />

      </Routes>

  );
}

export default App;
