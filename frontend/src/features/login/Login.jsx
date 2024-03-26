import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/authUserApi';
import { setToken } from '../../features/auth/authSlice';

export function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tryUserLogin = {
      email: email,
      password: password,
    };
    try {
      const response = await login(tryUserLogin).unwrap();
      const token = response.body.token;
      dispatch(
        setToken({
          token,
        }),
      );
      navigate('/profile');
    } catch (err) {
      console.error(error);
    }
  };

  return (
    <div className=" m-auto mt-12 flex w-[300px] flex-1 flex-col items-center gap-3 bg-white">
      <img
        className=" mt-5 size-7"
        src="./public/assets/img/login-icon.svg"
        alt="login"
      />
      <h3 className="text-2xl font-bold">sign in</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-left ">
          <label className="text-base font-bold" htmlFor="username">
            Username
          </label>
          <div>
            <input
              className="border-1 border border-black px-4 py-1"
              type="email"
              name="email"
              id="email"
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="mb-4 text-left ">
          <label className="text-base font-bold" htmlFor="password">
            Password
          </label>
          <div>
            <input
              className="border-1 border border-black px-4 py-1"
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              required
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error.data.message}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="">Remember me</label>
        </div>
        <div>
          {/* <Button>Sign in</Button> */}
          <button
            className="focus:bg-gren-400 my-5 mb-0 inline-block w-full bg-green-600 px-4 py-3  text-sm font-semibold uppercase tracking-wide text-white underline transition-colors duration-300 hover:bg-green-500 focus:outline-none"
            type="submit"
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
