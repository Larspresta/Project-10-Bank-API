import { useState } from 'react';
import { useUsernameMutation } from '../../services/authUserApi';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';

function EditName() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const getToken = useSelector((state) => state.auth.token);
  const { firstName: curFirstName, lastName: curLastName } = useSelector(
    (state) => state.auth.user || {},
  );

  const [updateUsername, { isLoading, isSuccess, isError, error }] =
    useUsernameMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = getToken;
    const user = { firstName, lastName };

    try {
      await updateUsername({ user, token }).unwrap();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={curFirstName}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={curLastName}
        />
        {/* Using the custom Button component */}
        <Button disabled={isLoading}>Update Name</Button>
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
