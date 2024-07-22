//react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//components
import { SellerProducts } from "./components/sellerShop/SellerProducts";
import { ShopItems } from "./components/Shops/shop/ShopItems";
import ShopsItems from "./components/Shops/ShopsItems";

//layouts
import CustomerLayout from "./layouts/CustomerLayout";
import SellerShopLayout from "./layouts/SellerShopLayout";
import ShopsLayout from "./layouts/ShopsLayout";

//pages
import Cart from "./pages/Cart";
import CustomerProfile from "./pages/CustomerProfile";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import { SignupPage } from "./pages/SignupPage";
import StoreRegisterPage from "./pages/StoreRegisterPage";
import SellerProfile from "./pages/SellerProfile";

//protected routes
import ProtectedRoutesCustomer from "./auth/ProtectedRoutesCustomer";
import ProtectedRoutesSeller from "./auth/ProtectedRoutesSeller";

const routes = createRoutesFromElements(
  <Route>
    <Route path="" index element={<Home />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="store-register" element={<StoreRegisterPage />} />

    {/* customer */}
    <Route element={<ProtectedRoutesCustomer />}>
      <Route path="main" element={<CustomerLayout />}>
        <Route path="shops" element={<ShopsLayout />}>
          <Route index element={<ShopsItems />} />
          <Route path="shop/:id" element={<ShopItems />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="search-results" element={<SearchResultsPage />} />
      </Route>
    </Route>

    {/* seller */}
    <Route element={<ProtectedRoutesSeller />}>
      <Route path="my-shop" element={<SellerShopLayout />}>
        <Route path="my-products" element={<SellerProducts />} />
        {/* <Route path="shops" element={<ShopsLayout />}>
          <Route index element={<ShopsItems />} />
          <Route path="shop/:id" element={<ShopItems />} />
        </Route>
        <Route path="cart" element={<Cart />} /> */}
        <Route path="seller-profile" element={<SellerProfile />} />
        <Route path="search-results" element={<SearchResultsPage />} />
      </Route>
    </Route>
    <Route path="*" element={<Error />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
