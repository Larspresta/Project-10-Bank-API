import Button from '../../ui/Button';

function Login() {
  return (
    <div className=" m-auto mt-12 flex w-[300px] flex-1 flex-col items-center gap-3 bg-white">
      <img
        className=" mt-5 size-7"
        src="./public/assets/img/login-icon.svg"
        alt="login"
      />
      <h3 className="text-2xl font-bold">sign in</h3>
      <form action="">
        <div className="mb-4 text-left ">
          <label className="text-base font-bold" htmlFor="username">
            Username
          </label>
          <div>
            <input
              className="border-1 border border-black px-4 py-1"
              type="text"
              name="username"
              id="username"
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
              required
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="">Remember me</label>
        </div>
        <div>
          <Button>Sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
