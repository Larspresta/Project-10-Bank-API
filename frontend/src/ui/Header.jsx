import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <img
          className="w-[200px]"
          src="./public/assets/img/argentBankLogo.png"
          alt="Argent Bank"
        />
      </Link>
      <div className="px flex gap-2 px-4">
        <img
          className="size-6"
          src="./public/assets/img/login-icon.svg"
          alt="login"
        />
        <div className="cta ">
          {user ? (
            <button className="button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className="button" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
