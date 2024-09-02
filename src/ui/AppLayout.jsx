import { Link, Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      <header className="border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
        <Link to="/" className="tracking-widest">
          Fast React Pizza
        </Link>
        <SearchOrder />
        <Username />
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
