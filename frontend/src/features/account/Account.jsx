import Button from '../../ui/Button';
import AccountContent from './AccountContent';

function Account() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-white">
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <div className="m-auto mb-8 w-[150px]">
        <Button>Edit Name</Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountContent
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      ></AccountContent>
      <AccountContent
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Current Balance"
      ></AccountContent>
      <AccountContent
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      ></AccountContent>
    </div>
  );
}

export default Account;
