import { useState } from 'react';
import { useUsernameMutation } from '../../services/authUserApi'; // Adjust the import path as necessary
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, updateProfile, getToken } from '../auth/authSlice';
import Button from '../../ui/Button';

function EditName({ onCancel }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [updateUsername, { isLoading, isSuccess, isError, error }] =
    useUsernameMutation();

  const token = useSelector(getToken);

  const getUser = useSelector(getUsername);
  const { firstName: curFirstName, lastName: curLastName } = getUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName };

    try {
      const response = await updateUsername({ user, token }).unwrap();
      dispatch(updateProfile({ user: response.body }));
    } catch (err) {
      console.error();
    }
  };

  return (
    <div className=" m-auto mb-8 mt-12 flex w-[300px] flex-1 flex-col items-center gap-3 bg-white">
      <h3>Change your name</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-base font-bold" htmlFor="username">
            first name
          </label>
          <input
            className="border-1 border border-black px-4 py-1"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={curFirstName}
          />
        </div>
        <div>
          <label className="text-base font-bold" htmlFor="username">
            last name
          </label>
          <input
            className="border-1 border border-black px-4 py-1"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={curLastName}
          />
        </div>
        <div className="m-auto w-4/5">
          <Button type="submit" disabled={isLoading}>
            Update Name
          </Button>
          <Button type="button" onClick={onCancel} disabled={isLoading}>
            cancel
          </Button>
        </div>
      </form>
      {isSuccess && <p>Name updated successfully!</p>}
      {isError && (
        <p>
          Error updating name: {error?.data?.message || 'An error occurred'}
        </p>
      )}
    </div>
  );
}
export default EditName;
