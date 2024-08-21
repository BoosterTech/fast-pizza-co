import { Link, Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

const AppLayout = () => {
  return (
    <>
      <header>
        <Link to="/">Fast React Pizza</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
};

export default AppLayout;
