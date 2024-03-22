import { getYear } from '../utils/helpers';

function Footer() {
  return (
    <div>
      <p>Copyright {getYear()} Argent Bank</p>
    </div>
  );
}

export default Footer;
