import { Link } from 'react-router-dom';
import LoginUser from '../features/login/LoginUser';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link className="" to="/">
        <img
          className="w-[200px]"
          src="./public/assets/img/argentBankLogo.png"
          alt="Argent bank"
        />
      </Link>
      <LoginUser />
    </div>
  );
}

export default Header;
