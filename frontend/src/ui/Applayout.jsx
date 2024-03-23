import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Applayout() {
  const location = useLocation();
  const locationPage = location.pathname === '/';
  const mainTagColor = locationPage ? 'bg-white' : 'bg-indigo-950';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className={mainTagColor}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayout;
