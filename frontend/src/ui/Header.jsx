import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserDetailsQuery } from '../services/authApi';
import { logout } from '../features/auth/authSlice';

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { data, isFetching } = useGetUserDetailsQuery(undefined, {
    skip: !userInfo?.userToken,
  });

  useEffect(() => {}, [data, dispatch]);

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
        <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo
              ? `Logged in as ${userInfo.email}`
              : "You're not logged in"}
        </span>
        <div className="cta">
          {userInfo ? (
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
