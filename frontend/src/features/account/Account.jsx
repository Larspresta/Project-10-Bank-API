import { useGetUserDetailsQuery } from '../../services/authApi';
import Button from '../../ui/Button';
import AccountContent from './AccountContent';

function Account() {
  const { data: userDetails, isLoading, error } = useGetUserDetailsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-white">
        Welcome back
        <br />
        {userDetails?.name}
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
        description="Available Balance"
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