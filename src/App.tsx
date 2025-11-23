import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import OrderPage from './pages/order/OrderPage';
import ProductsPage from './pages/product/ProductsPage';
import UserPage from './pages/user/UserPage';
import AssetsPage from './pages/assets/AssetsPage';
import NavBar from './components/layout/NavBar';
import BottomTabs from './components/layout/BottomTabs';
import AddEditProduct from './pages/product/AddEditProduct';
import PdpPage from './pages/product/PdpPage';
import AddEditCategoryPage from './pages/assets/AddEditCategoryPage';
import SingleOrderPage from './pages/order/SingleOrderPage';
import Login from './pages/auth/Login';
import CreateStory from './pages/story/CreateStory';
import CreateBlog from './pages/blog/CreateBlog';
import CreateBanner from './pages/banner/CreateBanner';

type Props = {};

function App({}: Props) {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/assets" element={<AssetsPage />} />
      </Route>
      <Route path="/add-product/:id" element={<AddEditProduct />} />
      <Route path="/product/:id" element={<PdpPage />} />
      <Route
        path="/add-category/:id"
        element={<AddEditCategoryPage />}
      />
      <Route path="/order/:id" element={<SingleOrderPage />} />
      <Route path="/create-story" element={<CreateStory />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/create-banner" element={<CreateBanner />} />
    </Routes>
  );
}

export default App;

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-full bg-primary4">
        <Outlet />
        <div className="h-[100px]" />
      </div>
      {/* <SideBar /> */}
      <BottomTabs />
    </div>
  );
};
