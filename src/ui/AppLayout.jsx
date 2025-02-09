import { Link, Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
        <Link to="/Fast-Pizza-Co/" className="tracking-widest">
          Fast React Pizza
        </Link>
        <SearchOrder />
        <Username />
      </header>
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {isLoading && <Loader />}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
