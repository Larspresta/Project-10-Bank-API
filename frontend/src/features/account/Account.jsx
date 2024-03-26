import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProfileQuery } from '../../services/authUserApi';
import Button from '../../ui/Button';
import AccountContent from './AccountContent';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../auth/authSlice';
import EditName from './EditName';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { data, error } = useProfileQuery(token, {
    skip: !token,
  });

  console.log(data);

  const [showEditForm, setShowEditForm] = useState(false);

  function handleShowEdit() {
    setShowEditForm(!showEditForm);
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (data) {
      dispatch(login({ user: data.body }));
    }
    if (error) {
      console.error('Error fetching user:', error);
      navigate('/login');
    }
  }, [data, error, dispatch, navigate]);

  return (
    <div className="mt-8">
      <h1 className="m-auto text-3xl font-bold text-white">
        Welcome back
        <br />
        {user?.firstName} {user?.lastName}
      </h1>

      {!showEditForm ? (
        <div className="m-auto mb-8 w-[150px]">
          <Button onClick={handleShowEdit}>Edit Name</Button>
        </div>
      ) : (
        <EditName onCancel={handleShowEdit} />
      )}

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
