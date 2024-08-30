import { Link, Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <header>
        <Link to="/">Fast React Pizza</Link>
        <SearchOrder />
      </header>
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
