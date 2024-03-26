import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUsername, logout } from '../features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();
  const { firstName } = useSelector(getUsername) || {};

  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <img
          className="w-[200px]"
          src="./public/assets/img/argentBankLogo.png"
          alt="Argent Bank"
        />
      </Link>
      <div className=" flex gap-2 px-4">
        {firstName ? (
          <div className=" flex gap-2 px-4">
            <p>{firstName}</p>
            <img
              className="size-6"
              src="./public/assets/img/logout-icon.svg"
              alt="login"
            />
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <>
            <NavLink className=" button flex gap-2 px-4" to="/login">
              <img
                className="size-6"
                src="./public/assets/img/login-icon.svg"
                alt="login"
              />
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
