import { getYear } from '../utils/helpers';

function Footer() {
  return (
    <div className="border-t-2 py-8 text-center">
      <p>Copyright {getYear()} Argent Bank</p>
    </div>
  );
}

export default Footer;
