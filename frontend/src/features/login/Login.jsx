import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userLogin } from '../../features/auth/authSlice';
import Error from '../../ui/Error';

function Login() {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/profile');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    console.log(data);
    dispatch(userLogin({ email: data.email, password: data.password }));
  };

  return (
    <div className=" m-auto mt-12 flex w-[300px] flex-1 flex-col items-center gap-3 bg-white">
      <img
        className=" mt-5 size-7"
        src="./public/assets/img/login-icon.svg"
        alt="login"
      />
      <h3 className="text-2xl font-bold">sign in</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}
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
              {...register('email')}
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
              {...register('password')}
              required
            />
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
            {loading ? 'loading' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
